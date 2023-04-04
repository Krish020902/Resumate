module.exports = ({
  id,
  fname,
  lname,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  extra_1,
  extra_2,
}) => {
  return `
        <!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style >
        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;  
}

body {
  min-height: 100%;  
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;   
  background: #fff;
  margin: 0px auto 0px; 
  box-shadow: 1px 1px 2px #DAD7D7;
  border-radius: 3px;  
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
}
  .full-name {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .first-name {
    font-weight: 700;
  }
 
  
  .last-name {
    font-weight: 300;
  }
  
  .contact-info {
    margin-bottom: 20px;
  }
  
  .email ,
  .phone {
    color: #999;
    font-weight: 300;
  } 
  
  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  
  .position {
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
  }



.details {
  line-height: 20px;
}
  .section {
    margin-bottom: 40px;
    line-height: 20px;  
  }
  
  .section:last-of-type {
    margin-bottom: 0px;
    line-height: 20px;  
  }
  
  .section__title {
    letter-spacing: 2px;
    color: #54AFE4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 20px;
  }
  
  .section__list-item {
    margin-bottom: 40px;
    line-height: 20px;
  }
  
  .section__list-item:last-of-type {
    margin-bottom: 0;
    line-height: 20px;
  }
  
  .left ,
  .right {
    vertical-align: top;
    display: inline-block;
    line-height: 20px;
  }
  
  .left {
    width: 60%;    
    line-height: 20px;
  }
  
  .right {
    text-align: right;
    width: 39%;    
    line-height: 20px;
  }
  
  .name {
    font-weight: bold;
    line-height: 20px;
  }
  
  a {
    text-decoration: none;
    color: #000;
    font-style: italic;
    line-height: 20px;
  }
  
  a:hover {
    text-decoration: underline;
    color: #000;
    line-height: 20px;
  }
  
  .skills {
    
  }
    
  .skills__item {
    margin-bottom: 10px;
    line-height: 20px;  
  }
  
  .skills__item .right {
    
      display: none;
      line-height: 20px;
    }
    
    label {
      display: inline-block;  
      width: 20px;
      height: 20px;
      background: #C3DEF3;
      border-radius: 20px;
      margin-right: 3px;
    }
    
    input:checked + label {
      background: #79A9CE;
    }
    </style>
</head>
<body>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>

<div class="container">
  <div class="header">
    <div class="full-name">
    <span class="first-name">${fname}</span> 
    
    
      <span class="last-name">${lname}</span>
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">${email}</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">${phone}</span>
       <span class="separator"></span>
    <!-- <div> -->

      <span class="text"><span class="fa fa-github" style="font-size: 31px;">

      </span><a href=${github}>${github}</a>
      </span>
    <!-- </div> -->
      <span class="separator"></span>
    <!-- <div> -->

      <span class="text"><span class="fa fa-linkedin" style="font-size: 31px;">

      </span>  <a href=${linkedin}>${linkedin}</a>
      </span>
    
    <div class="about">
      <span class="position">Front-End Developer </span>
      <span class="desc">
        ${skills} 
      </span>
    </div>
  </div>
   <div class="details">
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">${exp1_org}</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">${exp1_dur}</div>
          </div>
          <div class="right">
            <div class="name">${exp1_pos}</div>
            <div class="desc">${exp1_desc}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">${edu1_school}</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">${edu1_year}</div>
          </div>
          <div class="right">
            <div class="name">${edu1_qualification}</div>
            <div class="desc">${edu1_desc}</div>
          </div>
        </div>
        

      </div>
      
  </div>
     <div class="section">
      <div class="section__title">Projects</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">${proj1_title}</div>
           <div class="text">${proj1_desc}</div>
           <a href=${proj1_link}>Link to project</a>
         </div>
         
         <div class="section__list-item">
                    <div class="name">${proj2_title}</div>
           <div class="text">${proj2_desc}
           </div>
           <a href=${proj2_link}>Link to project </a>
         </div>
       </div>
    </div>
     <div class="section">
       <div class="section__title">Skills</div>
       <div class="skills">
         <div class="skills__item">
           <div class="left"><div class="name">
             Javascript
             </div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
       </div>
       <div class="skills__item">
           <div class="left"><div class="name">
             CSS</div></div>
           <div class="right">
                          <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label>

           </div>
         </div>
         
       </div>
     <div class="section">
     <div class="section__title">
       Interests
       </div>
       <div class="section__list">
         <div class="section__list-item">
                  ${extra_2}
          </div>
       </div>
     </div>
     </div>
  </div>
</div>
</body>
</html>      `;
};
