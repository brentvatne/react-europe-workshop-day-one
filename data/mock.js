import _ from 'lodash';
import parseCustomDateString from '../util/parseCustomDateString';

const response = {
  data: {
    events: [
      {
        schedule: [
          {
            description: "With the advent of libraries like React, Redux and Immutable.js, it's clear that there's a shift away from imperative and object-oriented in the front-end towards a more declarative and functional approach. Meanwhile, libraries like RxJS and Mobx are spreading the use of Reactive Programming to model UIs via discrete, asynchronous event streams. How can we combine the best of both functional and reactive paradigms to model and build predictable UIs that control themselves?\n\nIn this talk, Preethi will explain what “Functional Reactive Programming” is, how close React / Redux / Mobx / RxJs and others come in realizing Functional Reactive Programming, and what's still fundamentally missing from these tools to achieve a true implementation of FRP. Lastly, she'll describe when and why  FRP is suitable (or not suitable) for building predictable and scalable UIs.",
            eventId: 74,
            id: 747,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/734/avatar.png',
                bio: 'Preethi is a Software and UI engineer who designs and builds AI-powered bots. She is passionate about creating amazing user experiences. Besides coding, she enjoys running, writing and reading.',
                github: 'iam-peekay',
                name: 'Preethi Kasireddy',
                twitter: 'iam_preethi',
              },
            ],
            startDate: '2017-05-19 12:30:00 +0000 UTC',
            title: 'Functional && Reactive',
          },
          {
            description: "We are biologically trained to notice motion: evolutionarily speaking, our survival depends on it. For this reason, animation when done well can guide your users. It can aid and reinforce spatial maps of our interfaces, and give us a sense that we understand interactions more deeply. For this reason, animation is incredibly powerful to convey meaning, but only when done well.\n\nBut animating the virtual DOM comes with some intricacies that affect our implementations. In this talk, we'll go over animating in React with a variety of methods, comparing and contrasting each. We'll cover add-ons like ReactCSSTransitionGroup, using external libraries like GSAP, React-Motion, motion using RxJS, and transitioning state with D3. We'll look inside some real systems, breaking down how we can create reusable components of animation principles for interchangeable yet cohesive patterns.",
            eventId: 74,
            id: 755,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/743/avatar.png',
                bio: 'Sarah is an award-winning Speaker, Consultant, and Staff Writer at CSS-Tricks. She’s given a Frontend Masters workshop on Advanced SVG Animations, and is working on a book for O’Reilly on SVG Animations. Sarah is a cofounder of Web Animation Workshops, partnering with Val Head.',
                github: 'sdras',
                name: 'Sarah Drasner',
                twitter: 'sarah_edo',
              },
            ],
            startDate: '2017-05-19 14:00:00 +0000 UTC',
            title: 'Animating the Virtual DOM',
          },
          {
            description: '* React Native overview & architecture.\n* "Hello world" with create-react-native-app.\n* Tooling: packager, developer tools, debugging.\n* ES6/7 highlights relevant to React Native (async/await, classes, property initializers, fetch).\n* Core components, styling, flex box.\n* Routing: react-navigation.',
            eventId: 74,
            id: 779,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/759/avatar.png',
                bio: 'Front-end web/mobile developer working on [Expo](https://expo.io) and one of **React Native** top committers.',
                github: 'brentvatne',
                name: 'Brent Vatne',
                twitter: 'notbrent',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/760/avatar.png',
                bio: 'Creator of [Deco IDE](https://www.decosoftware.com/), author of [React Native Express](http://www.reactnativeexpress.com/), contributor to the React Native documentation, and consultant to industry leaders like Airbnb and Facebook. Devin now works at Airbnb.',
                github: 'dabbott',
                name: 'Devin Abbott',
                twitter: 'devinaabbott',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/835/avatar.png',
                bio: 'Writing React Native devtools and services at [Expo](https://expo.io), Rust in mythical free time.',
                github: 'dikaiosune',
                name: 'Adam Perry',
                twitter: 'dika10sune',
              },
            ],
            startDate: '2017-05-16 07:30:00 +0000 UTC',
            title: 'React Native Workshop with Brent Vatne, Devin Abbott and Adam Perry - Day 1',
          },
          {
            description: 'Building a GraphQL Server /w Apollo (1 day)\n\n* Setting up a schema\n* Connecting to a datasource (microservice or datastore)\n* Setting up Apollo\n* Fetching data with static queries\n* Fetching data with dynamic queries\n* Writing data with mutations',
            eventId: 74,
            id: 782,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/748/avatar.png',
                bio: 'Cares a lot about consistent & easy to grasp UI. He created the React UI library Belle and carte blanche with Max, now works full-time on several React/Redux OS projects & more at Stripe.',
                github: 'nikgraf',
                name: 'Nik Graf',
                twitter: 'nikgraf',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/749/avatar.png',
                bio: 'Max travels around the world, brews rad coffee, skis beautiful mountains and makes stuff on the web such as the popular react-boilerplate project, draft.js. He also contributes to react.js, create-react-app, webpack and more.',
                github: 'mxstbr',
                name: 'Max Stoiber',
                twitter: 'mxstbr',
              },
            ],
            startDate: '2017-05-17 07:30:00 +0000 UTC',
            title: 'React Workshop with Max Stoiber and Nik Graf - Day 2',
          },
          {
            description: 'CSS-in-JS is a powerful technique to help you make your react components portable and manage your css code more easily, it has been popularized by the react team and has been taking over the frontend world ever since. Sunil Pai is the author of Glamor (one of the top css-in-js library in use by next.js, gatsby and sourcegraph) and is really passionate about css-in-js. You will learn:\n\n* what problems does css-in-js solve?\n* comparison of different css-in-js libraries\n* a deepdive into [glamor](https://github.com/threepointone/glamor)\n* different interfaces: jsxstyle, aphrodite, styled components\n* server side / static side rendering\n* composition strategies - theming, modularity, lazy loading, etc.\n* write your own plugins\n* autocomplete for styles with typescript/flow\n* build your own css-in-js lib!',
            eventId: 74,
            id: 784,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/741/avatar.png',
                bio: 'Mad scientist. Built websites for myntra, yahoo, visa, and others. Plays a blue guitar. Author of [glamor](https://github.com/threepointone/glamor).',
                github: 'threepointone',
                name: 'Sunil Pai',
                twitter: 'threepointone',
              },
            ],
            startDate: '2017-05-17 07:30:00 +0000 UTC',
            title: 'CSS-in-JS Workshop with Sunil Pai',
          },
          {
            description: 'Make sure to get in early at 323bis Rue de Charenton, 75012 Paris https://goo.gl/maps/t4FKT93C25u',
            eventId: 74,
            id: 773,
            speakers: [],
            startDate: '2017-05-18 06:30:00 +0000 UTC',
            title: 'Registration',
          },
          {
            description: 'Lunch time! Socialize while eating at our delicious buffet.',
            eventId: 74,
            id: 849,
            speakers: [],
            startDate: '2017-05-18 10:30:00 +0000 UTC',
            title: 'French Buffet',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 767,
            speakers: [],
            startDate: '2017-05-18 13:00:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'Animations can make your app more pleasing to use and help the user understand state changes. This talk will give best practices on when to use them and an introduction of how to implement them in React Native with a deep dive into a new strictly declarative approach similar to CSS animations and transitions.',
            eventId: 74,
            id: 738,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/478/avatar.png',
                bio: 'Joel is a front end engineer working at Klarna, creator of popular open source libraries such as `react-native-vector-icons` & `react-native-animatable`, and awarded 10 best apps of 2016 by Apple for the Vogue app.',
                github: 'oblador',
                name: 'Joel Arvidsson',
                twitter: 'trastknast',
              },
            ],
            startDate: '2017-05-19 15:30:00 +0000 UTC',
            title: 'A Novel Approach to Declarative Animations in React Native',
          },
          {
            description: '* Core APIs: Persistence, StatusBar, Keyboard, AppState, NetInfo, BackAndroid.\n* Animations: LayoutAnimation, Animated. Gestures: PanResponder and beyond. Native driver and threading implications.\n* Current ecosystem: boilerplates, component libraries, and other libraries.\n* Ejecting and installing and writing native modules.',
            eventId: 74,
            id: 783,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/759/avatar.png',
                bio: 'Front-end web/mobile developer working on [Expo](https://expo.io) and one of **React Native** top committers.',
                github: 'brentvatne',
                name: 'Brent Vatne',
                twitter: 'notbrent',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/760/avatar.png',
                bio: 'Creator of [Deco IDE](https://www.decosoftware.com/), author of [React Native Express](http://www.reactnativeexpress.com/), contributor to the React Native documentation, and consultant to industry leaders like Airbnb and Facebook. Devin now works at Airbnb.',
                github: 'dabbott',
                name: 'Devin Abbott',
                twitter: 'devinaabbott',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/835/avatar.png',
                bio: 'Writing React Native devtools and services at [Expo](https://expo.io), Rust in mythical free time.',
                github: 'dikaiosune',
                name: 'Adam Perry',
                twitter: 'dika10sune',
              },
            ],
            startDate: '2017-05-17 07:30:00 +0000 UTC',
            title: 'React Native Workshop with Brent Vatne, Devin Abbott and Adam Perry - Day 2',
          },
          {
            description: 'Coming soon',
            eventId: 74,
            id: 749,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/736/avatar.png',
                bio: 'Co-founder of Parse, now at Facebook. Manager of the Facebook Open Source team.',
                github: 'lacker',
                name: 'Kevin Lacker',
                twitter: 'lacker',
              },
            ],
            startDate: '2017-05-18 12:00:00 +0000 UTC',
            title: 'Worse is Better: The Upside of JavaScript Fatigue',
          },
          {
            description: 'Last years there have been great developments in state management libraries. Both Redux and MobX sprung from the React community and provide stand-alone, generic state management solutions. Both have gained big in popularity, and both have their own strengths and weaknesses. What can we learn from both approaches? Can we get the best of both worlds? Can we add a little Boabab and Cerebral to the mix? Is it possible to create a transparent reactive, snapshotable state container. With support for JSON patches, replayable actions, serialization, complex object graphs. With Redux & MobX compatibility, strong typing and runtime type checks out of the box. Get a glimpse of what next-gen state management might look like with mobx-state-tree. Largely designed by the MobX community and enforcing many best practices that have evolved over the last year.',
            eventId: 74,
            id: 664,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/651/avatar.png',
                bio: 'Dedicated yet mediocre (due to a lack of time) contributor to JS fatigue. Author of MobX. Tech Lead at Mendix',
                github: 'mweststrate',
                name: 'Michel Weststrate',
                twitter: 'mweststrate',
              },
            ],
            startDate: '2017-05-19 08:00:00 +0000 UTC',
            title: 'Next generation state management',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 769,
            speakers: [],
            startDate: '2017-05-19 09:00:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 770,
            speakers: [],
            startDate: '2017-05-19 13:00:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'Coming soon',
            eventId: 74,
            id: 748,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/735/avatar.png',
                bio: 'Making things at Facebook since 2008: React, GraphQL co-creator, Immutable.js, Mobile, JavaScript.',
                github: 'leebyron',
                name: 'Lee Byron',
                twitter: 'leeb',
              },
            ],
            startDate: '2017-05-19 13:30:00 +0000 UTC',
            title: 'GraphQL',
          },
          {
            description: 'Intermediate level workshop: this workshop assumes basic knowledge on React (components, properties, event handlers, state) and project setup (bundling etc). We will work from create-react-app in the workshop.\n\nIn this workshop we will build a small application (but not too trivial) application from scratch. We start by modelling our state after the mental picture we have from the problem. After that we define the operations we want to perform on the state, and define which information we want to derive from the state.\nWe will start small, and then discover that the very same principles apply to rendering our UI (using react), authentication, routing, testing, async processes. After this workshop you should have gathered enough knowledge to build real life applications based on MobX and the underlying reactive principles.\n\nTopics:\n\n* Introduction.\n* Setup\n* ES6 / ES.Next recap: arrow functions, classes, decorators, field initializers\n* Introduction to MobX, why MobX for state management?\n* MobX basics: observable, computed, autorun & action\n* Modelling domain state: stores, models, actions\n* Testing state & logic, JEST, snapshots\n* Building reactive user interface: observer (+ testing)\n* Recap: How does MobX track changes?\n* Using Provider / inject to pass stores through deeply nested interfaces\n* Fetching & storing data (+ testing)\n* Routing & authentication\n* Form validations\n* Conclusion',
            eventId: 74,
            id: 780,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/651/avatar.png',
                bio: 'Dedicated yet mediocre (due to a lack of time) contributor to JS fatigue. Author of MobX. Tech Lead at Mendix',
                github: 'mweststrate',
                name: 'Michel Weststrate',
                twitter: 'mweststrate',
              },
            ],
            startDate: '2017-05-16 07:30:00 +0000 UTC',
            title: 'Building real life apps with React & MobX',
          },
          {
            description: "There's a big push to improve React's perceived performance. And WebAssembly is fast. Could WebAssembly be part of the solution? In this talk, code cartoonist Lin Clark will look at what WebAssembly could mean for React’s performance, and how the new Fiber architecture makes that even more of a possibility.",
            eventId: 74,
            id: 652,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/642/avatar.png',
                bio: "Lin Clark is a code cartoonist... she turns software architectures into cartoons. When she's not drawing, she's tinkering with WebAssembly, Rust, and Servo at Mozilla. In past lives, she has hacked on Firefox's developer tools, worked at npm, and has been a core maintainer on a number of open source projects.",
                github: 'linclark',
                name: 'Lin Clark',
                twitter: 'linclark',
              },
            ],
            startDate: '2017-05-18 12:30:00 +0000 UTC',
            title: 'What WebAssembly means for React',
          },
          {
            description: 'React’s server-side rendering speeds up page load times, but it’s far from the only performance boost we can get on the server. In this talk, I’ll discuss how exploiting streaming and parallel processing on the server and browser can get us faster time to first byte, faster time to first paint, and faster time to full interactivity.',
            eventId: 74,
            id: 760,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/747/avatar.png',
                bio: 'Ex-CTO @ Redfin. Author of react-dom-stream, a streaming server-side rendering library for React.',
                github: 'aickin',
                name: 'Sasha Aickin',
                twitter: 'xander76',
              },
            ],
            startDate: '2017-05-18 15:30:00 +0000 UTC',
            title: 'How Streaming Can Supercharge React',
          },
          {
            description: 'Make sure to get in early.',
            eventId: 74,
            id: 775,
            speakers: [],
            startDate: '2017-05-19 06:30:00 +0000 UTC',
            title: 'Check-in',
          },
          {
            description: 'This is your opportunity to ask questions to the team.',
            eventId: 74,
            id: 772,
            speakers: [],
            startDate: '2017-05-19 16:30:00 +0000 UTC',
            title: 'Q&A Panel',
          },
          {
            description: '* Expo Snack by Brent Vatne\n* How to create a React Native reusable component for existing Android apps without knowing a thing about npm or node_modules by Petter Hesselberg\n* Quantifying Best Practices by Jackson Hamburger and Louis Antonelli\n* Leveraging code-splitting in React apps by Glenn Reyes\n* Smarter code-splitting and preloading for React applications by Brandon Dail',
            eventId: 74,
            id: 848,
            speakers: [],
            startDate: '2017-05-19 10:00:00 +0000 UTC',
            title: 'Lightning talks session',
          },
          {
            description: 'Authoring VR content is time consuming and technically challenging, I’ll be providing an overview of how we are using the core strengths, merits of React Native and building on it to drive and improve app development within Oculus. I’ll go into more detail about the runtimes of both the native Android version and WebVR versions and how we utilize the improved engineer workflow the technology gives us access to.',
            eventId: 74,
            id: 762,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/752/avatar.png',
                bio: 'Former “long time” game developer and now a software engineer in Oculus. Working on React VR and making VR developers lives easier.',
                github: 'mikearmstrong001',
                name: 'Mike Armstrong',
                twitter: 'm1k3',
              },
            ],
            startDate: '2017-05-19 12:00:00 +0000 UTC',
            title: 'The runtimes of React VR and use at Oculus',
          },
          {
            description: 'Coming soon',
            eventId: 74,
            id: 746,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/733/avatar.png',
                bio: 'Engineer at Facebook, working on React. Co-creator of Redux, creator of Recompose.',
                github: 'acdlite',
                name: 'Andrew Clark',
                twitter: 'acdlite',
              },
            ],
            startDate: '2017-05-18 08:00:00 +0000 UTC',
            title: 'Keynote',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 766,
            speakers: [],
            startDate: '2017-05-18 09:00:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'Jest was adopted widely across 100s of companies recently and provides an immersive testing experience. We’ll take a deeper look at JavaScript Testing with Jest and what it takes to turn a tool into a product with a delightful experience.',
            eventId: 74,
            id: 745,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/732/avatar.png',
                bio: 'Engineer at Facebook · Jest · Relay · React · Auphonic · TUGraz.',
                github: 'cpojer',
                name: 'Christoph Pojer',
                twitter: 'cpojer',
              },
            ],
            startDate: '2017-05-18 09:30:00 +0000 UTC',
            title: 'Building High-Quality JavaScript Tools',
          },
          {
            description: "The new wave of frameworks won't be frameworks at all. \n\nIn this talk, Sunil will explore how compilers and bundlers will replace certain runtime dependencies, without degrading the development experience that we all love and depend on. We'll discover strategies of incorporating these ideas into *any* regular app, how we can leverage component models from react/vue/ember etc to enhance these ideas, and my own take on tooling in this framework-less world.",
            eventId: 74,
            id: 753,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/741/avatar.png',
                bio: 'Mad scientist. Built websites for myntra, yahoo, visa, and others. Plays a blue guitar. Author of [glamor](https://github.com/threepointone/glamor).',
                github: 'threepointone',
                name: 'Sunil Pai',
                twitter: 'threepointone',
              },
            ],
            startDate: '2017-05-18 10:00:00 +0000 UTC',
            title: 'La nouvelle vague',
          },
          {
            description: 'Drinks, food, socializing, music.',
            eventId: 74,
            id: 847,
            speakers: [],
            startDate: '2017-05-18 17:00:00 +0000 UTC',
            title: 'Dinner',
          },
          {
            description: 'Coming soon',
            eventId: 74,
            id: 761,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/748/avatar.png',
                bio: 'Cares a lot about consistent & easy to grasp UI. He created the React UI library Belle and carte blanche with Max, now works full-time on several React/Redux OS projects & more at Stripe.',
                github: 'nikgraf',
                name: 'Nik Graf',
                twitter: 'nikgraf',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/749/avatar.png',
                bio: 'Max travels around the world, brews rad coffee, skis beautiful mountains and makes stuff on the web such as the popular react-boilerplate project, draft.js. He also contributes to react.js, create-react-app, webpack and more.',
                github: 'mxstbr',
                name: 'Max Stoiber',
                twitter: 'mxstbr',
              },
            ],
            startDate: '2017-05-19 08:30:00 +0000 UTC',
            title: 'Coming soon',
          },
          {
            description: 'Have a last drink before leaving.',
            eventId: 74,
            id: 851,
            speakers: [],
            startDate: '2017-05-19 17:00:00 +0000 UTC',
            title: 'Drink up',
          },
          {
            description: '* Tooling (1/2 day)\n    - Manipulating Child Components\n    - Building a Wrapper Component\n    - Building a Higher order component\n    - Composing higher order components\n\n* Advanced React Topics (1/2 day)\n    - Setup Hot reloading\n    - Speeding up hot reloading significantly with Webpack DLL\n    - Codesplitting with Webpack & how to make it work with the React Router\n    - Treeshaking with Webpack2 to reduce your load size',
            eventId: 74,
            id: 778,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/748/avatar.png',
                bio: 'Cares a lot about consistent & easy to grasp UI. He created the React UI library Belle and carte blanche with Max, now works full-time on several React/Redux OS projects & more at Stripe.',
                github: 'nikgraf',
                name: 'Nik Graf',
                twitter: 'nikgraf',
              },
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/749/avatar.png',
                bio: 'Max travels around the world, brews rad coffee, skis beautiful mountains and makes stuff on the web such as the popular react-boilerplate project, draft.js. He also contributes to react.js, create-react-app, webpack and more.',
                github: 'mxstbr',
                name: 'Max Stoiber',
                twitter: 'mxstbr',
              },
            ],
            startDate: '2017-05-16 07:30:00 +0000 UTC',
            title: 'React Workshop with Max Stoiber and Nik Graf - Day 1',
          },
          {
            description: 'Coming soon',
            eventId: 74,
            id: 744,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/731/avatar.png',
                bio: 'React core member. Currently working on reason. Creator of React Motion.',
                github: 'chenglou',
                name: 'Cheng Lou',
                twitter: '_chenglou',
              },
            ],
            startDate: '2017-05-18 14:00:00 +0000 UTC',
            title: 'Reason',
          },
          {
            description: '* ShoutemUI by the Shoutem team\n* return null; by Joshua Comeau\n* Thousand ways to navigate in React Native by Charles Mangwa\n* Fancy Footwork: Building a Composable CMS for Aldo by Brendan Moore, Sarah Mogin and Serge Rose\n* Detox — Graybox End-to-End Tests and Automation Library for React Native by Tal Kol\n* Danielle Man - Devtools for GraphQL\n* Serious graphics on React Native by James Ide',
            eventId: 74,
            id: 846,
            speakers: [],
            startDate: '2017-05-18 16:00:00 +0000 UTC',
            title: 'Lightning talks session',
          },
          {
            description: 'React provides an abstraction between the description of a UI and the details of how it\'s rendered on a given platform. The problem is that `<div>` and `<span>` are a hidden dependency on `react-dom`, and similarly, React Native\'s `<View>` is an explicit dependency on Native, making both not quite as "cross-platform" as we want them to be. Learn how we as a community can get around these issues, and what we can unlock by doing so.',
            eventId: 74,
            id: 752,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/744/avatar.png',
                bio: 'Software Developer & Imagineer at @airbnb. Author of the Enzyme testing utilities for React and various react-native plugins. Leland like learning, discussing, and diving into challenges.',
                github: 'lelandrichardson',
                name: 'Leland Richardson',
                twitter: 'intelligibabble',
              },
            ],
            startDate: '2017-05-19 15:00:00 +0000 UTC',
            title: 'React as a Platform: A path towards a truly cross-platform UI',
          },
          {
            description: 'Our official ReactEurope Hackathon at Mozilla office in Paris from 9am to 9pm on May 20th. IMPORTANT: The address is "16 Boulevard Montmartre, 75009 Paris, France (https://goo.gl/NLbvX1)". Make sure to bring your own laptop and French AC adaptor. Tickets limited.\n\nThe schedule of the hackathon is:\n\n- checkin and breakfast start at 9:00am\n- lunch at 12pm\n- people start presenting their projects at 7pm',
            eventId: 74,
            id: 795,
            speakers: [],
            startDate: '2017-05-20 07:00:00 +0000 UTC',
            title: 'Hackathon at Mozilla from 9am to 9pm',
          },
          {
            description: 'Make sure to get in early.',
            eventId: 74,
            id: 781,
            speakers: [],
            startDate: '2017-05-17 06:30:00 +0000 UTC',
            title: 'Workshop Checkin & French Breakfast',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 771,
            speakers: [],
            startDate: '2017-05-19 14:30:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'Your typical French breakfast with croissants, coffee and more.',
            eventId: 74,
            id: 774,
            speakers: [],
            startDate: '2017-05-18 06:45:00 +0000 UTC',
            title: 'Breakfast',
          },
          {
            description: "Dominic will talk about what makes inferno's so fast and how he and the team are bringing this experience to react.",
            eventId: 74,
            id: 750,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/737/avatar.png',
                bio: 'Author of Inferno – a blazing fast React-like JavaScript UI library. Dominic is now part of the React team at Facebook. Enjoys coding + being a Dad.',
                github: 'trueadm',
                name: 'Dominic Gannaway',
                twitter: 'trueadm',
              },
            ],
            startDate: '2017-05-18 08:30:00 +0000 UTC',
            title: 'What I Learned Benchmarking React',
          },
          {
            description: 'Socialize, have some coffee or other drinks.',
            eventId: 74,
            id: 768,
            speakers: [],
            startDate: '2017-05-18 14:30:00 +0000 UTC',
            title: 'Coffee Break',
          },
          {
            description: 'If only React Native apps could be highly extensible- such that a single experience within an app could be published and installed into other apps. If your screens are built with sufficient isolation, they can be portable between apps, platforms, and navigation implementations. In this talk, we will discuss how this ultimate modularity can be achieved simply by utilizing reducers and single-directional data flow. Then we will use React Navigation to quickly build a new experience with these techniques, and see how portable it really is.',
            eventId: 74,
            id: 763,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/753/avatar.png',
                bio: 'Eric is a self-taught web developer who has been working on React Native and apps at Facebook since joining in 2014. He now focuses on the needs of the React Native open-source community.',
                github: 'ericvicenti',
                name: 'Eric Vicenti',
                twitter: 'ericvicenti',
              },
            ],
            startDate: '2017-05-18 15:00:00 +0000 UTC',
            title: 'Maximally Modular Apps with React Navigation',
          },
          {
            description: "Twitter for Mobile Web is a complex PWA built with Node.js, React, Redux, Service Workers, and Webpack. This talk will cover how our team designs and builds one of the world's most visited web apps. You'll also hear about React Native for Web; how we approach network and render performance challenges; and how we use new web platform features.",
            eventId: 74,
            id: 757,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/750/avatar.png',
                bio: 'Engineering at @twitter. Author of react-native-web and normalize.css.',
                github: 'necolas',
                name: 'Nicolas Gallagher',
                twitter: 'necolas',
              },
            ],
            startDate: '2017-05-19 09:30:00 +0000 UTC',
            title: 'The making of Twitter Lite',
          },
          {
            description: 'Lunch time! Socialize while eating at our delicious buffet.',
            eventId: 74,
            id: 850,
            speakers: [],
            startDate: '2017-05-19 10:30:00 +0000 UTC',
            title: 'French Buffet',
          },
          {
            description: 'Make sure to get in early.',
            eventId: 74,
            id: 777,
            speakers: [],
            startDate: '2017-05-16 06:30:00 +0000 UTC',
            title: 'Workshop Checkin & French Breakfast',
          },
          {
            description: 'nc',
            eventId: 74,
            id: 754,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/835/avatar.png',
                bio: 'Writing React Native devtools and services at [Expo](https://expo.io), Rust in mythical free time.',
                github: 'dikaiosune',
                name: 'Adam Perry',
                twitter: 'dika10sune',
              },
            ],
            startDate: '2017-05-18 13:30:00 +0000 UTC',
            title: 'Practical Confidence: Using Types to Help Your Computer Help You',
          },
          {
            description: 'Your typical French breakfast with croissants, coffee and more.',
            eventId: 74,
            id: 776,
            speakers: [],
            startDate: '2017-05-19 06:45:00 +0000 UTC',
            title: 'Breakfast',
          },
          {
            description: 'With React, Redux, ImmutableJS and friends, frontend development strive towards the functional approach proving to yield increased readability and maintainability. However, working in JavaScript, we never truly commit to the paradigm, but what if we did? The Elm language goes fully functional and as suspected, it comes with an ocean of benefits!',
            eventId: 74,
            id: 756,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/745/avatar.png',
                bio: 'React by day | Elm by night ❤️ . Author of elm-plot, contributes to carte-blanche, elm-belle and more.',
                github: 'terezka',
                name: 'Tereza Sokol',
                twitter: 'terezk_a',
              },
            ],
            startDate: '2017-05-19 16:00:00 +0000 UTC',
            title: 'Putting the fun in functional with Elm',
          },
          {
            description: 'This talk will go over our approach of incremental React Native adoption within an already established native app. We will discuss the various problems that arise from using React Native in such a “hybrid” app model and in particular, discuss inter-app navigation and embedding React Native views into native shells and vice-versa.',
            eventId: 74,
            id: 758,
            speakers: [
              {
                avatarUrl: 'https://api.eventlama.com/avatars/events/74/speakers/751/avatar.png',
                bio: 'Engineer at Facebook on React Native. Ex-Torontonian and Londoner, now in the Bay Area.',
                github: 'mmmulani',
                name: 'Mehdi Mulani',
                twitter: null,
              },
            ],
            startDate: '2017-05-19 16:15:00 +0000 UTC',
            title: 'Integrating React Native with Native Infrastructure',
          },
        ],
      },
    ],
  },
};

const sampleEvent = response.data.events[0].schedule[0];
const sortedScheduleItems = _.chain(response.data.events[0].schedule)
  .sort(item => item.startDate)
  .value();

const dates = _.chain(sortedScheduleItems)
  .map(item => item.startDate)
  .uniq()
  .sort()
  .value();

const items = _.groupBy(sortedScheduleItems, item => item.startDate);
const itemsByDay = _.groupBy(sortedScheduleItems, item =>
  parseCustomDateString(item.startDate).getDay()
);
const itemsForThursday = _.groupBy(
  _.sortBy(itemsByDay[4], item => item.startDate),
  item => item.startDate
);

const itemsForFriday = _.groupBy(
  _.sortBy(itemsByDay[5], item => item.startDate),
  item => item.startDate
);

module.exports = {
  response,
  sampleEvent,
  sortedScheduleItems,
  eventsForThursday: itemsForThursday,
  eventsForFriday: itemsForFriday,
};
