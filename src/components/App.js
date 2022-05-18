import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import React from "react";

import PostList from "./PostList";
import '../style/App.css';

const App = () => {
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "mm", [1200, 1600], {compress: true});
        const data = await document.querySelector("#pdf-content");
        pdf.html(data).then(() => {
          pdf.save("blog-posts.pdf");
        });
      };    

    return (
            <div id='pdf-content' className="ui container">
                <PostList />
                <button onClick={createPDF} type="button">Download</button>
            </div>
        );
};

export default App;
