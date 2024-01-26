import { html, LitElement, PropertyValueMap } from 'lit'
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


/**
 * Scroll Spy - A component that will highlight navigation links when the corresponding article anchor link is in view
 * @element scroll-spy 
 * @slot - The navigation links
 * 
 */


@customElement('scroll-spy')
export class ScrollSpy extends LitElement {
  /**
   * The query selector that targets the article element containing the sections to be observed.
   */
  @property({ type: String }) scrollTarget: string = 'article'

  /**
   * The query selector that targets the navigation links.
   */
  @property({ type: String }) anchorElements: string = 'a'

  /**
   * The class that will be added to the active navigation link.
   */
  @property({ type: String }) activeClass: string = 'active'

  /**
   * The attribute used to find the sections that will be observed.
   */
  @property({ type: String }) sectionAttribute: string = 'id'

  /**
   * The point at which the navigation links should be active, specified as a gsap ScrollTrigger value.
   */
  @property({ type: String }) viewportTriggerPoint: string = 'top top'

  
  @state() currentIndex = 0
  @queryAssignedElements({}) slotContent!: Array<HTMLAnchorElement>;
  articleElement:HTMLElement|null = null;
  anchors:HTMLAnchorElement[] = []
  links:HTMLAnchorElement[] = []

  connectedCallback() {
    super.connectedCallback();
    gsap.registerPlugin(ScrollTrigger)
  }
  
  
  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.articleElement = document.querySelector(this.scrollTarget);    
    if (!this.articleElement) {
      throw new Error(`ScrollSpy: The article element could not be found. Please add an article attribute to the scroll-spy element and make sure the element exists.`)
    }
    if (!this.articleElement || !this.slotContent[0]) return;

    this.anchors = Array.from(this.articleElement.querySelectorAll(`[${this.sectionAttribute}]`));
    this.links = Array.from(this.slotContent[0].querySelectorAll(this.anchorElements));
    this.updateLinks(0)
    
    this.observeSections();
  }
  
  protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('currentIndex')) {        
      const oldvalue = _changedProperties.get('currentIndex')    
      const newValue = this.currentIndex

      if (newValue < 0) return;
      this.updateLinks(newValue, oldvalue)
    }
  }
    
  updateLinks(newValue:number, oldvalue?:number) {   
    const navigationItem = this.links[newValue];
    navigationItem && navigationItem.classList.add(this.activeClass)
    
    if (oldvalue === undefined) return;
    const previous:HTMLAnchorElement = this.links[oldvalue]
    previous && previous.classList.remove(this.activeClass)
  }

  observeSections = () => {    
    this.anchors.forEach((anchor, index) => {      
      ScrollTrigger.create({
        trigger: anchor as HTMLElement,
        start: this.viewportTriggerPoint,
        end: this.viewportTriggerPoint,
        // markers: true,
        onEnter: () => { this.currentIndex = index },
        onEnterBack: () => { this.currentIndex-- }
      })
    })
  }


  render() {
    return html`
      <div class="container" >
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scroll-spy': ScrollSpy
  }
}
