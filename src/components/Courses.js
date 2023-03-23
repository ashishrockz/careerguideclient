/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './courses.css';
import './courses.scss';
import {Link} from "react-router-dom";

const Courses = ({ posts }) =>{
    return (

        <div >
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-background nav-background-overlay">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">CareerGuide</a>
    </div>
  </nav>
  <br></br>
            {posts.map((contents, key) => (
              

    <div className="container" key={key} >
<section class="light">
	<div class="container py-2">
		

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
        <Link to ={{
          pathname:`/${contents._id}`
        }}>
				<h1 class="postcard__title blue">{contents.title}</h1>
        </Link>
				<div class="postcard__subtitle small">
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">{contents.description}</div>
			</div>
		</article>
	</div>
</section>
  </div>
            ))}
  </div>
  

    );
}
export default Courses;
