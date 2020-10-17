import React from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
const TodoListUi = (props) => {
        return ( <div>
            <Input
                placehilder={props.inpitValue  }
                style={{ width:'200px',marginRigtht:'10px' }}
                onChange={props.changeInputValue} />
            <Button type="primary" onClick={props.clickBut}> 增加 </Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index)=>(<List.Item onClick={()=>{props.deleteItem(index)}} >{item}</List.Item>)}
            />
                </div> 
            )
}
 
export default TodoListUi;