import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import './global.css';

import CommentBox from './mycomment';

import RaisedButton from 'material-ui/lib/raised-button';
import Tab from 'material-ui/lib/tabs/tab';
import Tabs from 'material-ui/lib/tabs/tabs';

const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');

const Avatar = require('material-ui/lib/avatar');
const Colors = require('material-ui/lib/styles/colors');


import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';


const GridList = require('material-ui/lib/grid-list/grid-list');
const GridTile = require('material-ui/lib/grid-list/grid-tile');

//import 'jquery'

var SelectableList = SelectableContainerEnhance(List);



class Myform extends React.Component {

    constructor(props) {
        super();
        this.state = {
            myname:[]
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        console.log(name);
        console.log(age);
        var comment = {"myname":name, "myage":age };
        var desturl = "/aa/bb/cc";

        $.ajax({
            url: desturl,
            dataType: "json",
            type:"POST",
            data:comment,
            success: (resclist) => {
                console.log("ok");
            },
            error:(xhr, status, err) => {
                console.log(err.toString());
            }
        });

    }



    handleChange(event) {
        this.setState({myname:event.target.value});
        console.log(this.state.myname);
    }

    render() {
        return (
            <div> 
                    <h2>显示表单</h2> 
                    <div>
                        <form onSubmit={event => {this.handleSubmit(event)}}>
                        <input ref="name" placeholder="your name" onChange={event=> {this.handleChange(event)}} value={this.state.myname} />
                        <input ref="age" placeholder="your age"   />
                        <button type="submit">submit</button>
                        </form>
                    </div>
            </div>
            );
    }



}


class App extends React.Component {

    constructor (props) {
        super();
        this.state = { 
            selectedIndex: 0
        };
    }

    handleUpdateSelectedIndex(e,index) {
      console.log(index);
      alert(index);
  }

    render() {
        var tilesData = [
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"}, 
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"},
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"}, 
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"}, 
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"},
            {"title":"药品名", "author":"厂家", "img":"xwp.jpg"}
        ];                                
        return (
            <div>
                    <Tabs>
                          <Tab label="药品图片" >
                                <GridList
                                  cellHeight={200}
                                  style={{width: 320, height: 640, overflowY: 'auto'}}
                                  >
                                  {
                                    tilesData.map(tile => <GridTile
                                      title={tile.title}
                                      subtitle={<span>by <b>{tile.author}</b></span>}
                                      ><img src={tile.img} /></GridTile>)
                                  }
                                </GridList>
                            </Tab>

                          <Tab label="应用切换" >
                                <h1>test</h1>
                                    <Tabs>
                                        <Tab label="aaa">
                                            <h1>11111</h1>
                                        </Tab>
                                        <Tab label="bbb">
                                            <h1>22222</h1>
                                        </Tab>
                                        <Tab label="ccc">
                                            <h1>33333</h1>
                                        </Tab>
                                    </Tabs>
                          </Tab>
                          <Tab label="表单提交" >
                              <h2>提交表单，可以从控制台查看</h2>
                                <Myform />
                          </Tab>
                          <Tab label="列表示例">
                                <List subheader="不可点击列表" >
                                  <ListItem 
                                     leftAvatar={<Avatar src="./xwp.jpg" />}
                                    primaryText="张三"
                                    secondaryText={
                                      <p>
                                        <span style={{color: Colors.redA200}}>张三简介</span><br/>
                                        张三病人的简介张三病人的简介张三病人的简介张三病人的简介
                                        张三病人的简介张三病人的简介张三病人的简介张三病人的简介
                                      </p>
                                    }
                                    secondaryTextLines={2} />

                              <ListDivider inset={true} />

                                  <ListItem 
                                    leftAvatar={<Avatar src="./xwp.jpg" />}
                                    primaryText="李四"
                                    secondaryText={
                                      <p>
                                        <span style={{color: Colors.redA200}}>李四简介</span><br/>
                                        啊的发送到发送到发呆发说法第三方的法律会计饿了快人家他俩看见让他论文看具体了惹我客厅
                                      </p>
                                    }
                                    secondaryTextLines={2} />

                                  <ListDivider inset={true} />
                                </List>

                                <SelectableList
                                  valueLink={{value: this.state.selectedIndex, requestChange: this.handleUpdateSelectedIndex}}
                                  subheader="可点击列表">
                                  <ListDivider inset={true} />
                                  <ListItem
                                    value={1}
                                    primaryText="这是１" />
                                  <ListDivider inset={true} />
                                  <ListItem
                                    value={2}
                                    primaryText="这是2" />
                                  <ListDivider inset={true} />
                                  <ListItem
                                    value={3}
                                    primaryText="这是3" />
                                  <ListDivider inset={true} />
                                </SelectableList>


                          </Tab>
                    </Tabs>

             </div>
      );
    }
}

let injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('example')
    );
/*
ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Demo} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} >
                <Route path="message/:id" component={Message} /> 
            </Route>
            <Route path="demo" component={Demo} />
            <Route path="*" component={NoMatch} />
      </Route>
  </Router>
), document.getElementById('example'));
*/

