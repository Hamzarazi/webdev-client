export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Hamza" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Razi" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input type="password" id="wd-your-student-id" placeholder="Student ID" />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="An MSCS student at Khoury College of Northeastern University. In this course I want to learn how to build and deploy full-stack web applications with Next.js, React, Node.js, and MongoDB."
      />
      <br />
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />
      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-backend"
        defaultChecked
      />
      <label htmlFor="wd-your-backend">Backend</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-fullstack"
        defaultChecked
      />
      <label htmlFor="wd-your-fullstack">Full-stack</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-cloud" />
      <label htmlFor="wd-your-cloud">Cloud</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="CYBER">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NEXTJS"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODEJS">Node.js</option>
        <option value="MONGODB">MongoDB</option>
        <option value="TYPESCRIPT">TypeScript</option>
      </select>
      <br />
      <label htmlFor="wd-your-email">School email:</label>
      <input
        type="email"
        id="wd-your-email"
        defaultValue="razi.h@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2026"
        min={2024}
        max={2030}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2025-01-06"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        Excitement about this course (0-10):
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min="0"
        max="10"
        defaultValue="10"
      />
      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
