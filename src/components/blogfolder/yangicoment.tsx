import { Inputlar, Yangicomment } from "../stylecomponent"
import savatcha from "../../Rasm/savatcha.svg"

const Yangicomentcomponent = () => {
  return (
    <Yangicomment>
        <h3>Add A Review</h3>
        <p>You email address will not be published. Required fields are marked</p>
        <Inputlar>
<input type="email" placeholder="Your email*"/>
<input type="name" placeholder="Your name*"/>

        </Inputlar>

        <textarea name="comment" id="" placeholder="Your comment*"></textarea>

        <button><img src={savatcha} alt="icon"/> Write your review</button>
    </Yangicomment>
  )
}
export default Yangicomentcomponent