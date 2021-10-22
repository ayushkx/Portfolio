import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <div  className="footer" height="100px" style={{textAlign:'center'}}>
               <div className="container">
                    <br />
                    Made with ❤️ by
                    <a href="http://github.com/ayushkx" style={{color: 'white'}}><strong> ayushkx</strong></a >
                    <br />
                    <hr />
                    To use this template as your website, go to this 
                    <a
                    href="#" style={{color: 'white'}}><strong> repository</strong></a >, download the source code and change relevant information!
                    <br />
                    <br />
                </div>
            </div>
      </div>
    )
}
