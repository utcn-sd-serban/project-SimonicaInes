import React from "react";

const FilterByTitle = ({filteredQuestions}) => (
    <div className="container-fluid">
        <div className="Jumbotron">
            <table border={1}>
                <thead>
                <tr>
                    <th> Title </th>
                    <th> Text </th>
                    <th> Author </th>
                    <th> Date </th>
                    <th> Tags </th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredQuestions.map((question, index)=>(
                        <tr key={index}>
                            <td>{question.title}</td>
                            <td>{question.text}</td>
                            <td>{question.authorId}</td>
                            <td>{question.date}</td>
                            <td>{question.tags}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>


        </div>
    </div>
);
export default FilterByTitle;
