import React from "react";

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ["apple", "mundiri", "tengha", "manga"],
            user: [
                { name: "vibi", age: 21 }, { name: "lamee", age: 23 }, { name: "ribi", age: 18 },
            ]
        };
    }


    render() {
        // var lis = this.state.list.map(function(li,k){
        //     return <li>{li}</li>
        // })



        return (
            <div>
                <ul>
                    {this.state.list.map((li, k) => <li key={k}>{li}</li>)}
                </ul>

                <table>
                    <tr>
                        <td>name</td>
                        <td>age</td>
                    </tr>

                    {
                        this.state.user.map((lst, k) => {
                            return (
                                <tr>
                                    <td key={k}>{lst.name}</td>
                                    <td key={k}>{lst.age}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>

        )
    }



}

export default List;