import React, { useRef } from "react";
import CardWrapper from "../ui/CardWrapper";
import classes from "./Cards.module.css";

const NewCardForm = (props) => {
  // Reference Object
  const titleInput = useRef();
  const imageInput = useRef();
  const rankInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(e) {
    e.preventDefault();

    // Reading and Selecting the value being input in the input field
    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredRank = rankInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    // Formatting the collected data to send it to server
    const cardData = {
      title: enteredTitle,
      image: enteredImage,
      rank: enteredRank,
      description: enteredDescription,
    };

    props.onAddCard(cardData);
  }

  return (
    <CardWrapper formClass="card_wrapper-form">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title </label>
          <input type="text" required id="title" ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image </label>
          <input type="url" required id="image" ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="rank"> Rank </label>
          <input type="text" required id="rank" ref={rankInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description </label>
          <textarea
            required
            id="description"
            rows="3"
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button> Add Card </button>
        </div>
      </form>
    </CardWrapper>
  );
};

export default NewCardForm;
