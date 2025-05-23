const BlogsSection = () => {
  return (
    <div className="h-full w-full px-2 py-2 bg-gradient-to-b from-cyan-600 to-pink-500">
      
      <h2 className="max-w-[1200px] mx-auto font-extrabold text-3xl text-blue-950 px-8">Blogs</h2>
      <div className="max-w-[1200px]  mx-auto flex flex-col lg:flex-row gap-4 rounded-lg">

        {/* left section */}
        <div className="lg:w-[50%] flex flex-col justify-center gap-4">
          {/* featured blog */}
          <div className="h-[29rem] md:h-[18rem] lg:h-[27rem] lg:w-full md:w-[90%] mx-4 my-2 px-4 py-4 border rounded-lg text-white relative flex flex-col md:flex-row lg:flex-col gap-2">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCL5wUt2zucqZFjkmSYuh2NAFopxyJK4W0h8J-Zs2Qgw0_FqxpvPMDqAHxVj0QmwWbZ-uPl-nWfAg589c_MgONTGWRxTXa5732MoUC-oIYxSUjCqGv68mLfcGZqK_1nvTwH_RIFj6EX5ipVesGV2pvO2o2rw0MXVTkUYpROWjxYHbnlLG3qqYAEBLCCUNA/w400-h318-rw/pexels-magnus-mueller-1398178-2818118.jpg" alt="The Impact of Social Media on Mental Health" loading="lazy"
              className="h-[250px] rounded-lg"/>
              <div className="flex flex-col gap-2 justify-center px-2">
                  <h3 className="font-bold ">The Impact of Social Media on Mental Health: Navigating the Digital Landscape</h3>
            <p>Hello, digital explorers! Today, we dive into the intriguing topic of social media.....</p>
            <a href="https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html" className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit border px-6 py-1 rounded-md text-center font-semibold">Read more</a>
              </div>
          </div>

          <div className="h-[29rem] md:h-[18rem] lg:h-[27rem] w-[95%] md:w-[90%] lg:w-full mx-4 my-2 px-4 py-4 border rounded-lg text-white relative flex flex-col md:flex-row lg:flex-col gap-2">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCL5wUt2zucqZFjkmSYuh2NAFopxyJK4W0h8J-Zs2Qgw0_FqxpvPMDqAHxVj0QmwWbZ-uPl-nWfAg589c_MgONTGWRxTXa5732MoUC-oIYxSUjCqGv68mLfcGZqK_1nvTwH_RIFj6EX5ipVesGV2pvO2o2rw0MXVTkUYpROWjxYHbnlLG3qqYAEBLCCUNA/w400-h318-rw/pexels-magnus-mueller-1398178-2818118.jpg" alt="The Impact of Social Media on Mental Health" loading="lazy"
              className="h-[250px] rounded-lg"/>
              <div className="flex flex-col gap-2 justify-center px-2">
                  <h3 className="font-bold">The Impact of Social Media on Mental Health: Navigating the Digital Landscape</h3>
            <p>Hello, digital explorers! Today, we dive into the intriguing topic of social media.....</p>
            <a href="https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html" className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit border px-6 px-2 py-1 rounded-md text-center font-semibold">Read more</a>
              </div>
          </div>
        </div>

      {/* right section */}
        <div className="lg:w-[50%] flex flex-col mx-auto  md:flex-row gap-2 md:flex-wrap py-6">
          <div className="h-[24rem] md:h-[260px] w-[95%] md:w-[90%] lg:w-full mx-4 my-2 px-4 py-4 border rounded-lg text-white relative flex flex-col md:flex-row text-sm">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-jVrJ1g-kX5qEU7AmROkARJF_sLmvnabFlua6pE39P0hRsE1p8IlMo8r2z7WaMUXhFgRxFgj-j78KP3vUSBns_hIW1LDqq71ooAYWRfOejvOvk5LNTpOu99lH6BHYhIf4h8vZtYCGYvvd4tyGVq9ywgcWTQyoInb9HjNE67-L2o4qf_DEhyTGzwdTCgFQ/w945-h600-p-k-no-nu/pexels-kseverin-1542252.jpg" alt="The Impact of Social Media on Mental Health" loading="lazy"
              className="h-[220px] rounded-lg"/>
              <div className="flex flex-col gap-2 justify-center px-4">
                  <h3 className="font-bold">The Impact of Social Media on Mental Health: Navigating the Digital Landscape</h3>
                  <p>Hello, digital explorers! Today, we dive into the intriguing topic of social media.....</p>
            <a href="https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html" className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit border px-6 py-1 rounded-md text-center font-semibold">Read more</a>
              </div>
          </div>
          
          <div className="h-[24rem] md:h-[260px] w-[95%] md:w-[90%] lg:w-full mx-4 my-2 px-4 py-4 border rounded-lg text-white relative flex flex-col md:flex-row text-sm">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-jVrJ1g-kX5qEU7AmROkARJF_sLmvnabFlua6pE39P0hRsE1p8IlMo8r2z7WaMUXhFgRxFgj-j78KP3vUSBns_hIW1LDqq71ooAYWRfOejvOvk5LNTpOu99lH6BHYhIf4h8vZtYCGYvvd4tyGVq9ywgcWTQyoInb9HjNE67-L2o4qf_DEhyTGzwdTCgFQ/w945-h600-p-k-no-nu/pexels-kseverin-1542252.jpg" alt="The Impact of Social Media on Mental Health" loading="lazy"
              className="h-[220px] rounded-lg"/>
              <div className="flex flex-col gap-2 justify-center px-4">
                  <h3 className="font-bold">The Impact of Social Media on Mental Health: Navigating the Digital Landscape</h3>
                  <p>Hello, digital explorers! Today, we dive into the intriguing topic of social media.....</p>
            <a href="https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html" className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit border px-6 py-1 rounded-md text-center font-semibold">Read more</a>
              </div>
          </div>

          <div className="h-[24rem] md:h-[260px] w-[95%] md:w-[90%] lg:w-full mx-4 my-2 px-4 py-4 border rounded-lg text-white relative flex flex-col md:flex-row text-sm">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-jVrJ1g-kX5qEU7AmROkARJF_sLmvnabFlua6pE39P0hRsE1p8IlMo8r2z7WaMUXhFgRxFgj-j78KP3vUSBns_hIW1LDqq71ooAYWRfOejvOvk5LNTpOu99lH6BHYhIf4h8vZtYCGYvvd4tyGVq9ywgcWTQyoInb9HjNE67-L2o4qf_DEhyTGzwdTCgFQ/w945-h600-p-k-no-nu/pexels-kseverin-1542252.jpg" alt="The Impact of Social Media on Mental Health" loading="lazy"
              className="h-[220px] rounded-lg"/>
              <div className="flex flex-col gap-2 justify-center px-4">
                  <h3 className="font-bold">The Impact of Social Media on Mental Health: Navigating the Digital Landscape</h3>
                  <p>Hello, digital explorers! Today, we dive into the intriguing topic of social media.....</p>
            <a href="https://amanmaikhuri.blogspot.com/2024/08/the-impact-of-social-media-on-mental.html" className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit border px-6 py-1 rounded-md text-center font-semibold">Read more</a>
              </div>
          </div>

          <button type="button" className="mx-6 md:mx-9 px-2 py-1 border rounded-md text-white bg-blue-950">Read more Blogs</button>
        </div>
      </div>
    </div>
  )
}
export default BlogsSection