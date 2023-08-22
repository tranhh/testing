import React from 'react';
import { Link } from 'react-router-dom';


function HomePage(){
    return (
        <div className='container'>
            <header className="row padd">
                <div>
                <Link className="logo" to="/"><img src="../images/Group69.svg" alt="" /></Link>
                </div>
                <div className="header-links">
                <Link to="/signin"><p>Sign In</p></Link>
                </div>
            </header>
            <div className='content padd'>
                <h1>Save your data storage here.</h1>
                <p className='header-detail-content'>Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.</p>
                <a href='/' className='more'><p>Learn more</p></a>
            </div>
            <div className='main'>
                <div className='main0'>
                    <div className='main-title'>
                        <h1>Features</h1>
                        <h3>Some of the features and advantages that we provide for those of you</h3>
                        <h3 className='h3-2'>who store data in this Data Warehouse.</h3>
                    </div>
                </div>
                <div className='main-contents padd'>
                    <div className='row1 row'>
                        <div className='box1 box-items'>
                            <div className='box-items2'>
                                <h2>Search Data</h2>
                                <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <a>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div className='box'></div>

                        <div className='box2 box-items'>
                            <div className='box-items2'>
                                <h2>24 Hours Access</h2>
                                <p>Access is given 24 hours a full morning to night and
                                meet again in the morning, giving you comfort when
                                you need data when urgent.</p>
                                <a>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className='row2 row'>
                        <div className='box3 box-items'>
                            <div className='box-items2'>

                                <h2>Print Out</h2>
                                <p>Print out service gives you convenience if someday
                                you need print data, just edit it all and just print it.</p>
                                <a>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        
                        <div className='box'></div>

                        <div className='box4 box-items'>
                            <div className='box-items2'>
                                <h2>Security Code</h2>
                                <p>Data Security is one of our best facilities. Allows for your files
                                to be safer. The file can be secured with a code or password that 
                                you created, so only you can open the file.</p>
                                <a>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quadrilateral"></div>
        </div>
        
    );
}
export default HomePage;