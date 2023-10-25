import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [isCurOpen, setIsCurOpen] = useState();

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <Accordion
          title={item.title}
          index={index}
          curOpenId={isCurOpen}
          setOpenId={setIsCurOpen}
          key={index}
        >
          {item.text}
        </Accordion>
      ))}
      <Accordion
        title="Things to learn to become an Web Dev"
        index={22}
        curOpenId={isCurOpen}
        setOpenId={setIsCurOpen}
        key={22}
      >
        <p> An website is an mixture of the following things: </p>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </Accordion>
    </div>
  );
}

function Accordion({ title, index, curOpenId, setOpenId, children }) {
  const isOpen = index === curOpenId;
  function toggleState() {
    setOpenId(index === curOpenId ? null : index);
  }
  return (
    <div className={`item ${isOpen && "open"}`} onClick={toggleState}>
      <p className="number">
        {index < 10 && "0"}
        {index + 1}
      </p>
      <p className="title"> {title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      <div className="content-box"> {isOpen && children} </div>
    </div>
  );
}
