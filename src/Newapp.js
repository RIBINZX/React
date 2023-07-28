import Todolist from "./Todulist";
import Testobject from "./Testobject";
import Setcolor from "./Setcolor";

function Newapp(){

    return(
        <div>
            <Todolist/>
            <Testobject name="helloi" test="testing class component object" />
            <Setcolor/>
        </div>
    )

}
export default Newapp