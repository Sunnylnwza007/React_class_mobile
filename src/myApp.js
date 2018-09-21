import React, {Component} from 'react';
import Image from './image';
import Columns from './Columns'
import 'bulma/css/bulma.css';

class MyApp extends Component{
    render(){
        return (
            <div className="container">
            <section className="sections">
                <Columns class="columns">
                    <Columns class="column">
                        <Image src={require('./img/cat.jpg')} alt="cat"/>
                    </Columns>

                    <Columns class="column">
                        <Image src={require('./img/hide.jpg')} alt="hide"/>
                    </Columns>
                </Columns>

             <Columns class="columns">
                 <Columns class="column">
                    <Image src={require('./img/snoop.png')} alt="snoop"/>
                 </Columns>

                <Columns class="column">
                    <Image src={require('./img/wiz.png')} alt="wiz"/>
                </Columns>
            </Columns>
           
                </section>
            </div>
        );
    }
};

export default MyApp;