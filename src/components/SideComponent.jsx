import React,{Component} from 'react';

class SideComponent extends Component{

    render(){
        return (
            <>
                <a href="index.html#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                <aside id="colorlib-aside"  className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                        <h1 id="colorlib-logo"><a href="index.html">Ssemate Brian</a></h1>
                        <span className="position"><a href="index.html#">Software Developer/Designer</a> in Uganda, Africa</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="index.html#" data-nav-section="home">Home</a></li>
                            <li><a href="index.html#" data-nav-section="about">About</a></li>
                            <li><a href="index.html#" data-nav-section="services">Services</a></li>
                            <li><a href="index.html#" data-nav-section="skills">Skills</a></li>
                            <li><a href="index.html#" data-nav-section="education">Education</a></li>
                            <li><a href="index.html#" data-nav-section="experience">Experience</a></li>
                            <li><a href="index.html#" data-nav-section="work">Work</a></li>
                            <li><a href="index.html#" data-nav-section="blog">Blog</a></li>
                            <li><a href="index.html#" data-nav-section="contact">Contact</a></li>
                        </ul>
                        </div>
                    </nav>
                    <div className="colorlib-footer">
                        <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash.com</a></span></small></p>
                        <ul>
                        <li><a href="index.html#"><i className="icon-facebook2" /></a></li>
                        <li><a href="index.html#"><i className="icon-twitter2" /></a></li>
                        <li><a href="index.html#"><i className="icon-instagram" /></a></li>
                        <li><a href="index.html#"><i className="icon-linkedin2" /></a></li>
                        </ul>
                    </div>
                </aside>
            </>
        )
    }


}

export default SideComponent