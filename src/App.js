import React from 'react';

// Define the HOC
function withExtraProp(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <WrappedComponent
        extraProp="Hello from HOC"
        lextraProp="lextra"
        {...props}
      />
    );
  };
}

function MyComponent(props) {
  return (
    <div>
      <p>{props.extraProp}</p>
      <p>{props.message}</p>
    </div>
  );
}

function MyComponent2(props) {
  return (
    <div>
      <p>{props.lextraProp}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* Use the HOC directly within JSX */}
      {withExtraProp(MyComponent)({ message: 'Hi there' })}
      {withExtraProp(MyComponent2)({ message: 'Bi there' })}
    </div>
  );
}
