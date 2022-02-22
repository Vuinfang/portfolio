import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import {Button, Divider, Image, Layout, Progress} from 'antd';
import Me from '../src/assets/images/me.jpg';
import About from './pages/about';
import Project from './pages/project';
import {
  GithubFilled,
  ReadFilled,
  HomeFilled,
  FilePptFilled,
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  DownloadOutlined,
  ImportOutlined,
  SmileOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const screenHeight = window.screen.height * 0.77;

export default function App () {
  const [isHover,setHover]= useState(false);
    return(
      <>
        <Layout style={{backgroundColor: '#c1cbc9'}}>
          <Header style={style.banner}>
            <div style={style.navSection}>
              <a href={''}>
                <HomeFilled style={{color: 'darkgreen'}}/>
                <span style={style.navWords}>&nbsp;Home</span>
              </a>
              <a href={''}>
                <ReadFilled style={{color: 'darkgreen'}}/>
                <span style={style.navWords}>&nbsp;About Me</span>
              </a>
              <a href={''}>
                <FilePptFilled style={{color: 'darkgreen'}}/>
                <span style={style.navWords}>&nbsp;Projects</span>
              </a>
            </div>
            <div style={style.bannerCenterIterm}>
              <GithubFilled style={{color: 'darkgreen'}}/>
              <span style={style.navWords}>&nbsp;&nbsp;Vivienne's Garden</span>

            </div>
            <div style={style.navSection}>
              <div>
                <GithubFilled />&nbsp;&nbsp;
                <PhoneFilled />&nbsp;&nbsp;
                <MailFilled />&nbsp;&nbsp;
                <FacebookFilled />&nbsp;&nbsp;
              </div>
              <Button type="primary" shape="round" style={{backgroundColor: 'darkgreen'}} icon={<DownloadOutlined />}>
                My Resume
              </Button>
            </div>
          </Header>
          <Content style={style.contentSection}>
            <div style={style.horizonLine}></div>
            <div style={style.mainPicture}>
              <div
                style={ isHover ? style.myPictureBoxHover: style.myPictureBox}
                onMouseOver={()=>setHover(true)}
                onMouseOut={()=>setHover(false)}
              >
                <Image src={Me} style={style.myPicture}/>
                <div style={style.description}>
                  <h1>Hello! I am Vivienne,</h1>
                  <h3>I am a front-end software developer, currently I am living in Brisbane.</h3>
                  <h2>It is great to see you here!</h2>
                  <div style={style.smileIcon}><SmileOutlined style={{fontSize: 40, color: 'darkgreen'}}/></div>
                  <h2>Want to know more about me?</h2>
                  <Button type="primary" shape="round" style={{backgroundColor: 'darkgreen', marginTop: 40}} icon={<ImportOutlined />}>More About Me</Button>
                </div>
              </div>
              <div style={style.skillSection}>
                <div style={{width: '90%', height: 40}}>
                  <h2>Languages</h2>
                </div>
                <div style={style.skillBox}>
                  <div style={style.eachSkillBox}>
                    <Progress percent={80} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>JavaScript</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={90} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>HTML</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={90} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>CSS</h3>
                  </div>
                </div>
                <Divider />

                <div style={{width: '90%', height: 40}}>
                  <h2>Libraries</h2>
                </div>
                <div style={style.skillBox}>
                  <div style={style.eachSkillBox}>
                    <Progress percent={70} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>React</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={60} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>Redux</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={50} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>JQuery</h3>
                  </div>
                </div>
                <Divider />

                <div style={{width: '90%', height: 40}}>
                  <h2>Frameworks</h2>
                </div>
                <div style={style.skillBox}>
                  <div style={style.eachSkillBox}>
                    <Progress percent={80} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>Node.js</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={70} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>TypeScript</h3>
                  </div>
                  <div style={style.eachSkillBox}>
                    <Progress percent={70} size="small" status="active" strokeColor="darkgreen" type="circle" width="80px" strokeWidth="10" />
                    <h3>Nest.js</h3>
                  </div>
                </div>
                {/*<Divider />*/}
              </div>
            </div>
          </Content>
          <div style={style.footerButton}>
            <Button type="primary" shape="circle" icon={<CaretDownOutlined />} size="large" style={{backgroundColor: 'darkgreen', marginTop: '-1%'}}/>
          </div>
        </Layout>
        <About />
        <Project />
        <Footer style={style.footerButton}>
          <span>haha</span>
        </Footer>
      </>
      )
}

const style = {
  bannerCenterIterm: {
    width: '25%',
    minWidth: 200,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  banner: {
    padding: '0 100px',
    backgroundColor: '#c1cbc9',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navSection: {
    width: '25%',
    minWidth: 240,
    maxWidth: 300,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'darkgreen',
  },
  bannerName: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  navWords: {
    fontsize: 18,
    fontWeight: 700,
    color: 'darkgreen'
  },
  // -------------------Content---------------------------
  contentSection: {
    padding: '0 100px',
    height: screenHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#56f'
  },
  horizonLine: {
    padding: '0, 50px',
    marginBottom: 100,
    width: '100%',
    height: 1,
    backgroundColor: '#f5f5f5',
  },
  mainPicture: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    minWidth: '650px',
    height: 610,
    padding: '0 20px',
    // backgroundColor: '#f5e',
  },
  myPictureBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    minWidth: '150px',
    height: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0,0,0,.15)',
  },
  myPictureBoxHover: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    minWidth: '150px',
    height: '100%',
    padding: 20,
    // marginTop: -25,
    // marginLeft: -25,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 8px rgba(0,0,0,.3)',
    // opacity: 0.8
  },
  myPicture: {
    width: '100%',
    height: 500,
    padding: 10,
  },
  description: {
    width: '50%',
    padding: 10,
    // backgroundColor: '#5f1'
  },
  smileIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    height: 80,
    alignItems: 'center',
    // backgroundColor: '#f57',
  },
  // ---------------------------------------------------
  skillSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // justifyContent: 'center',
    width: '33%',
    minWidth: 260,
    height: '100%',
    alignItems: 'center',
    padding: '30px 0',
    // backgroundColor: '#f57',
  },
  skillBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    // backgroundColor: '#757',
  },
  eachSkillBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
    alignItems: 'center',
    // backgroundColor: '#757',
  },
  footerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff5e8'
  }
}


// ReactDOM.render(<APP />, mountNode);
