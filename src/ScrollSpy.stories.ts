import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit'
import './index'
import { ScrollSpy } from './ScrollSpy';


const meta: Meta = {
    title: 'Components/ScrollSpy',
    component: 'scroll-spy',
    parameters: {
        docs: {
            description: { // 👈 The description of the component
                component:
                    'Description…',
            },
        },
        status: {
            type: 'wip', // 'wip' | 'ready' 👈 The status of the component
        },
    },

    argTypes: {
      scrollTarget: {
        description: 'The query selector that targets the article element containing the sections to be observed.',
        control: 'text'
      },
      anchorElements: {
          description: 'The query selector that targets the navigation links.',
          control: 'text'
      },
      activeClass: {
          description: 'The class that will be added to the active navigation link.',
          control: 'text'
      },
      sectionAttribute: {
          description: 'The attribute used to find the sections that will be observed.',
          control: 'text'
      },
      viewportTriggerPoint: {
          description: 'The point at which the navigation links should be active, specified as a gsap ScrollTrigger value.',
          control: 'text'
      }
    },
    args: {
      scrollTarget: 'article',
      anchorElements: 'a',
      activeClass: 'active',
      sectionAttribute: 'id',
      viewportTriggerPoint: 'top 100px'
    }
};
export default meta;



export const Default: StoryObj<ScrollSpy> = {
  args: {
    scrollTarget: 'article',
    anchorElements: 'a',
    activeClass: 'active',
    sectionAttribute: 'id',
    viewportTriggerPoint: 'top top'
  },
  render: () => {
      return html`
        <section style="display: flex; gap: 40px;">

        <div style="position: sticky; top: 0; flex: 1 0 25%; align-self:start;">
          <scroll-spy>
            <nav>
              <ul>
                <li><a href="#headline1">Lorem Ipsum</a></li>
                <li><a href="#headline2">Sed Diam</a></li>
                <li><a href="#headline3">Cras Tristique</a></li>
                <li><a href="#headline4">Aliquam In</a></li>
                <li><a href="#headline5">Phasellus Elit</a></li>
              </ul>
            </nav>
          </scroll-spy>
        </div>
        <article>
            <h2 id="headline1">Lorem Ipsum</h2>
            <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 id="headline2">Sed Diam</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 id="headline3">Cras Tristique</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 id="headline4">Aliquam In</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 id="headline5">Phasellus Elit</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>
          </article>
        </section>
        <style>
          .active {
            color: red;
          }

        </style>
      `;
  }
};


export const Custom: StoryObj<ScrollSpy> = {
  args: {
    scrollTarget: '.myArticle',
    anchorElements: 'a',
    activeClass: 'myActiveClass',
    sectionAttribute: 'data-section',
    viewportTriggerPoint: 'top 100px'
  },
  render: (args) => {
      return html`
        <section style="display: flex; gap: 40px;">

        <div style="position: sticky; top: 0; flex: 1 0 25%; align-self:start;">
          <scroll-spy viewportTriggerPoint="${args.viewportTriggerPoint}" scrollTarget="${args.scrollTarget}" activeClass="${args.activeClass}" sectionAttribute="${args.sectionAttribute}">
            <nav>
              <ul>
                <li><a href="#headline1">Lorem Ipsum</a></li>
                <li><a href="#headline2">Sed Diam</a></li>
                <li><a href="#headline3">Cras Tristique</a></li>
                <li><a href="#headline4">Aliquam In</a></li>
                <li><a href="#headline5">Phasellus Elit</a></li>
              </ul>
            </nav>
          </scroll-spy>
        </div>
        <article class="myArticle">
            <h2 data-section="headline1" id="headline1">Lorem Ipsum</h2>
            <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 data-section="headline2" id="headline2">Sed Diam</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 data-section="headline3" id="headline3">Cras Tristique</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 data-section="headline3" id="headline4">Aliquam In</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>

                          <h2 data-section="headline4" id="headline5">Phasellus Elit</h2>
                          <p>Consequat velit fugiat elit sunt pariatur elit cupidatat. Lorem fugiat reprehenderit et consectetur dolore eiusmod. Commodo enim excepteur cupidatat ex duis officia proident sit nostrud pariatur laborum. Occaecat nostrud ullamco consequat. Ipsum sunt anim sit eiusmod consequat Lorem velit nostrud nostrud ea ullamco deserunt dolore reprehenderit.

            Enim aute ea amet aute sit aliqua pariatur. Aliqua irure excepteur quis deserunt sunt nulla et occaecat. Excepteur amet laborum proident consequat non dolor. Excepteur amet nisi sit anim velit incididunt eiusmod commodo exercitation pariatur irure amet do consequat. Duis sunt amet in esse culpa qui ad ut duis sit reprehenderit sit. Veniam quis amet et magna aliquip et labore dolor officia in. Quis aute irure enim officia amet velit qui laborum occaecat. Qui esse minim fugiat enim ea nostrud labore culpa nisi ut.

            Consectetur eu sit anim magna consequat elit esse Lorem excepteur magna cillum proident ullamco minim eiusmod. Excepteur do commodo qui nostrud sunt. Ut laboris sint tempor dolor incididunt aute minim exercitation. Aliquip dolore laborum magna elit non cupidatat consequat in mollit voluptate enim. Consectetur elit commodo adipisicing reprehenderit non. Commodo culpa ut consectetur qui duis officia anim voluptate adipisicing aute nisi mollit incididunt aliquip mollit.

            Ex consectetur ipsum quis ex elit id est sint id cupidatat mollit nulla nisi velit. Ea ut ut velit enim laboris voluptate excepteur. Duis esse qui duis in aliquip qui est consequat. Sint elit laborum velit culpa ex exercitation dolore dolor laboris labore. Magna proident enim cupidatat consectetur laborum velit labore mollit tempor deserunt deserunt deserunt dolor sint incididunt. Laborum elit occaecat est dolore quis consectetur ullamco reprehenderit nostrud ipsum. Id dolore nostrud excepteur excepteur laboris eiusmod cillum laboris aute dolor.

            Quis proident deserunt consectetur occaecat ea mollit officia nisi. Est proident dolore ex nostrud excepteur enim minim qui commodo veniam do deserunt excepteur. Sint dolore nisi ea enim ipsum duis cupidatat ipsum pariatur consectetur enim. Cillum cillum do amet nisi nisi dolor mollit exercitation est. Est cillum laboris excepteur enim quis veniam cillum aliqua commodo in. Nisi exercitation nisi ea sint dolore sit deserunt commodo in laboris. Commodo labore elit aute ad culpa ullamco sint. Deserunt enim dolore magna nostrud commodo adipisicing do amet.

            Occaecat ullamco officia velit consequat labore voluptate eiusmod. Lorem fugiat qui sit ad incididunt non consequat id sit amet laboris enim. Nostrud tempor ea quis excepteur exercitation do eiusmod eu elit nisi proident nisi eu. Excepteur ea aliquip nostrud cillum in magna. Et proident amet ea mollit magna deserunt eu officia voluptate do.

            Consequat deserunt eu occaecat eiusmod est in mollit aliqua officia laborum exercitation Lorem. Et in enim ipsum deserunt consequat veniam labore occaecat commodo qui velit irure mollit. Aute cillum amet quis ad sint duis velit adipisicing aliqua non elit et laborum nisi excepteur. Ea ea veniam dolor voluptate consequat dolore dolor officia. Consectetur nostrud anim ipsum est.

            Deserunt Lorem id anim. Exercitation nostrud nostrud aliqua elit. Lorem et ea do do voluptate tempor eu est sit. Ut qui veniam nostrud amet labore dolore ea nulla est ea non mollit. Sint elit dolor aliquip commodo esse sunt veniam sint sit ad reprehenderit consectetur. Nostrud laborum occaecat amet do.

            Ut fugiat adipisicing occaecat ex proident mollit enim esse. Ea ipsum ex duis ad culpa velit esse enim sunt ad. Minim tempor in nulla sint. Voluptate eiusmod adipisicing labore voluptate et ex Lorem mollit duis minim et sunt commodo qui. Irure voluptate enim ipsum elit ea quis. Culpa dolore sint sit consequat et elit irure labore do sint est reprehenderit dolor.

            Pariatur non deserunt magna pariatur veniam. Aute ex non ex eiusmod sit magna ullamco. Laboris mollit adipisicing nisi. Est cillum irure anim minim nisi anim occaecat reprehenderit. Do sit ut eiusmod aute velit quis officia velit labore aliqua sint in minim occaecat ad. Sint sit cupidatat duis. Ut consequat adipisicing amet officia eu incididunt consequat eu sunt ut proident minim non pariatur. Adipisicing irure aliqua tempor Lorem labore elit.</p>
          </article>
        </section>
        <style>
          .myActiveClass {
            color: red;
          }

        </style>
      `;
  }
};
