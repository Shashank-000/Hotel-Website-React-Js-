import { div } from 'prelude-ls';
import React from 'react';

const Form = () =>
{
    return(
        <div>
            
            <form action="welcome_get.php" method="get">
                Name: <input type="text" name="name"></input>
                E-mail: <input type="text" name="email"></input>
                <input type="submit"></input>
            </form>
            

        </div>        
    )
}
export default Form;