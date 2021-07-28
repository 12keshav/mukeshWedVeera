import React from 'react';
import '../Page/style.scss';

import {Layout} from 'antd'


const{ Content } = Layout;
const Page = (props) =>{
    return(
        <> 
          <main className="ToolPageWrap">
             <Layout className="layout PageWrap">
                 <Content>
                    {props.children}
                 </Content>
             </Layout>
          </main>
        </>
    )
}
export default Page;