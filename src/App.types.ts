// three ways of type declaration
// type,interace,inline
// type AppProps =  {...}
// inline- const App = ({title }: {title: string }) => {..}

// interface Users{
//   name: {
//     first: string;
//     last: string
//   };
//   login: {
//     uuid: string;
//   };
//   email: string;
// }



export interface Name {
    first: string;
    last: string;
  }
  export interface Login {
    uuid: string;
  }
  export interface Users {
    name: Name;
    login: Login;
    email: string
  }
  export interface AppProps {
    title: string;
  }