# React Exhaustive Deps
In early 2019, React released 16.8 which removed the stateless functional component which at the time was an alternative approach to writing class-based components without state, and replaced it with the functional component - no longer was the functional component considered stateless.

With this, you were left with two approaches. Keep writing class based components or adopt React Hooks and the functional component. 

Overwhelmingly, most projects moved to hooks and functional components and there are a few key reasons why:
- Less boiler plate as you're dealing with the render function of a class-based component directly.
- Aligns more with functional programming. 
   - Removing the absolute need to use a class component for anything remotely complex.
   - Making it less confusing for engineers coming from an object-oriented background.
   - The class goes back to being syntactic sugar, rather than a requirement for using React (unless using Error Boundaries).
- The ability to create your own abstract composable hooks using React's lifecycle and reduce abstract 'utility' functions.

With hooks though, came other challenges:
- In some cases, when using multiple useEffects, you can end up writing what appears to be more syntax to achieve the same result.
- Hooks if not maintained in some form of logical order can end up syntactically messy.
- A move towards using React as more of a framework, rather than a library. Good or bad? Debatable. 

Along with hooks came a new pattern, called dependencies. You can write a hook in a way that it will conditionally do a job for you based on these dependencies, rather than running all of the time or just once.

There are cases where you may want to do some work with something, but not because that something has changed. Maybe because something else has changed.

The way that React and its vision of dependencies was designed is that you can't do some work on something without first considering whether that something has changed or not. 

Confused? Let's look at some examples. Here we have an example of a useEffect hook that takes an initial address, put's it into local state, and then never fires again. It only wishes to do this on mount, just after the component is first rendered.
- [Missing Dependency](https://github.com/Kazumz/avoid-ignoring-exhaustive-deps/blob/main/src/examples/MissingDependency.tsx)

To achieve this, we've introduced something contentious. The glorious ESLint disable next line exhaustive deps ignore. Rather than ensure our dependency is stable, so that our useEffect never triggers, we've instead just ignored it completely. In the example we're looking at here, there is absolutely no reason for doing this. Static code analysis like ESLint exists for a reason, and the exhaustive deps rule is included in React by default as they consider it important to the health of your React app. In the words of Dan Abramov, "you should face your dependencies".

So how do we resolve the ESLint ignore? What are our options? Well, there are a few! We could:
- Move the object in to the static scope, outside of the React component so that it isn't recreated each render.
- Memoise the object, so that our useEffect doesn't fire. 
- Move the object inside of the useEffect as it appears to be initial data anyway.

In both of the latter two examples, you can see we've removed the need for the ESLint ignore. Nice and simple. However, bigger applications will have bigger problems, which is why it's important to raise awareness of this now so that things are built correctly from the get-go to minimise even considering this rule.

Let's do an exercise together:
- [Exercise](https://github.com/Kazumz/avoid-ignoring-exhaustive-deps/blob/main/src/examples/exercise/ComponentDidMount.tsx)

One solution that's worked for this exercise is useRef. useRef is your class equivalent variable. It's a reference to a space in memory that can be mutated, it gets disposed when there's no longer a reference to it. It's also safe across multiple re-renders. If we truly have a dependency we wish to ignore, this is one common way of achieving that - just assign it to a useRef variable, exactly as you'd do in a class-based component.

# Appendix
- https://bobbyhadz.com/blog/react-hooks-exhaustive-deps
- https://github.com/facebook/react/issues/14920#issuecomment-470945051
- https://github.com/facebook/create-react-app/issues/6880#issuecomment-485912528
- https://overreacted.io/a-complete-guide-to-useeffect/

# Limitations
- Please ensure FanDuel's assets as part of this repository are not reused or redistributed without explicit permission. (Exempt from the MIT licence applied here)
