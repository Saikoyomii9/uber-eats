import { Layout, Image } from "antd";
import AppRoutes from "./components/Routes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import RestarauntContextProvider from "./context/RestarauntContext";

Amplify.configure(awsconfig);

const  { Sider, Content, Footer } = Layout;

function App() {
  return (
    <RestarauntContextProvider>
    <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <Image
        src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
          preview={false}
          />
          <SideMenu />
    </Sider>
    <Layout>
      <Content>
        <AppRoutes />
      </Content>
      <Footer style={{textAlign: 'center'}} >
        Uber Eats Dashboard @2023
      </Footer>
    </Layout>
    </Layout>
    </RestarauntContextProvider>
  );
}

export default withAuthenticator(App);
