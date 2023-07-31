import Todolist from "./basics/Todulist";
import Testobject from "./basics/Testobject";
import Setcolor from "./Setcolor";
import Ajax from "./seclevel/Ajax";

function Newapp(){

    return(
        <div>
            <Todolist/>
            <Testobject name="helloi" test="testing class component object" />
            <Setcolor/>
            <hr/>
            <Ajax/>
        </div>
    )

}
export default Newapp