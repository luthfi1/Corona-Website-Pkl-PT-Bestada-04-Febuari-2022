
class Aboutme extends HTMLElement {

    connectedCallback(){
        this.render();
    }  
    render() {
        this.innerHTML = `
        <article id="about_me" class="text-center " style="width: 100%;">
            <div class="col-xl-4 col-lg-6 col-md-6  mx-auto " id="searchbar"> 
                <h2><strong>About Me</strong> </h2>
                <div class="card col-xl-12 shadow-sm">
                    <img src="https://avatars.githubusercontent.com/u/68719137?s=400&u=7166526fad8fc18fa6189abf3ce45a17a5512d25&v=4" class="img-fluid" alt="Responsive image">
                    <div class="card-body">
                    <h5 class="card-title"><b>Muhammad Luthfi Farizqi</b></h5>
                    <p>Developer <i class="fab fa-github"></i></p>
                    </div>
                </div>                 
            </div>
            </div>       
        </article>
 `;
    }
 }

 customElements.define("about-me", Aboutme);
