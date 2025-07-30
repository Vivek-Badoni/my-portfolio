// // src/components/Blog.jsx
// import React from "react";

// const blogPosts = [
//   {
//     title: "How I built my Food Finder with Voice Commands",
//     snippet:
//       "A breakdown of how I combined HTML, CSS, JS, Python SpeechRecognition, and Flask to make an interactive food search assistant.",
//     link: "#"
//   },
//   {
//     title: "Top 5 React Libraries I Use",
//     snippet:
//       "From React Router to Axios, here are my favorite go-to libraries that make development faster and smoother.",
//     link: "#"
//   }
// ];

// const Blog = () => (
//   <section className="section bg-light" id="blog">
//     <div className="container">
//       <h2 className="text-center mb-4">Blog</h2>
//       <div className="row">
//         {blogPosts.map((post, index) => (
//           <div className="col-md-6 mb-4" key={index}>
//             <div className="card h-100 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">{post.title}</h5>
//                 <p className="card-text">{post.snippet}</p>
//                 <a href={post.link} className="btn btn-outline-primary">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Blog;
import React from "react";

const Blog = () => {
  return (
    <section  id="blog">
      <div className="container">
        <h2 className="text-center mb-5">Latest Blog Posts</h2>
        <div className="row">
          {/* Blog Card 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">Getting Started with React</h5>
                <p className="card-text">
                  A beginner’s guide to building dynamic web apps using React.js and component-based development.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.webp?a=1&b=1&s=612x612&w=0&k=20&c=IvOrAfTuemU8rfbydZyzhBHvTNEggDywPB2yjSIQ3xU=" className="card-img-top" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">Mastering JavaScript Basics</h5>
                <p className="card-text">
                  Learn how JavaScript works under the hood with simple examples and use cases.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="https://media.istockphoto.com/id/2164544089/photo/businessman-using-tablet-on-network-structure-innovative-technology-efficiency-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=7TJtPw8uQU9Zq-dD7c3KrJ9Fok5sjMV18L94EJ6iFTg=" className="card-img-top" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Deploying with Firebase</h5>
                <p className="card-text">
                  Learn how to deploy your website or portfolio easily with Firebase hosting.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
