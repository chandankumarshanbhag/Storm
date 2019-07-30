import React from 'react'
import {readFileSync} from "fs"
import path from "path"

export default function (props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow&display=swap" rel="stylesheet"></link>
                <style>
                {`
                    a,
                    a:focus,
                    a:hover {
                    color: #fff;
                    }

                    .btn-secondary,
                    .btn-secondary:hover,
                    .btn-secondary:focus {
                    color: #333;
                    text-shadow: none; 
                    background-color: #fff;
                    border: .05rem solid #fff;
                    }

                    html,
                    body {
                    height: 100%;
                    background-color: #212121;
                    }

                    body {
                    display: -ms-flexbox;
                    display: flex;
                    color: #fff;
                    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
                    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
                    }

                    .cover-container {
                    max-width: 42em;
                    }

                    .masthead {
                    margin-bottom: 2rem;
                    }

                    .masthead-brand {
                    margin-bottom: 0;
                    }

                    .nav-masthead .nav-link {
                    padding: .25rem 0;
                    font-weight: 700;
                    color: rgba(255, 255, 255, .5);
                    background-color: transparent;
                    border-bottom: .25rem solid transparent;
                    }

                    .nav-masthead .nav-link:hover,
                    .nav-masthead .nav-link:focus {
                    border-bottom-color: rgba(255, 255, 255, .25);
                    }

                    .nav-masthead .nav-link + .nav-link {
                    margin-left: 1rem;
                    }

                    .nav-masthead .active {
                    color: #fff;
                    border-bottom-color: #fff;
                    }

                    @media (min-width: 48em) {
                    .masthead-brand {
                        float: left;
                    }
                    .nav-masthead {
                        float: right;
                    }
                    }

                    .cover {
                    padding: 0 1.5rem;
                    }
                    .cover .btn-lg {
                    padding: .75rem 1.25rem;
                    font-weight: 700;
                    }

                    .mastfoot {
                    color: rgba(255, 255, 255, .5);
                    }
                    
                `}
                </style>
            </head>
            <body className="text-center">
                <div className="cover-container d-flex w-100 h-100 p-1 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand">

                                <img src={"data:image/png;base64,"+Buffer.from(readFileSync(path.join(__dirname,"storm.png"))).toString('base64')} width="300px" />

                            </h3>
                            <nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link mt-5" href="#">About</a>
                                <a className="nav-link mt-5" href="#"><i className="fa fa-github"></i> GitHub</a>
                            </nav>
                        </div>
                    </header>

                    <main role="main" className="inner cover">
                        
                        <h3 className="cover-heading" style={{fontFamily: "'Archivo Narrow', sans-serif",fontWeight: "bold",letterSpacing: "3px"}}>Welcome to your Storm.js app.</h3>
                        <p className="lead my-5">
                            <a href="#" className="btn btn-secondary">Read Docs</a>
                        </p>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Developed By <a href="https://github.com/chandankumarshanbhag">Chandan Kumar</a>.</p>
                        </div>
                    </footer>
                </div>
            </body>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </html>
    )

}
