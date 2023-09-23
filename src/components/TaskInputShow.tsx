import { WithListContext } from "ra-core"

export const TaskInputShow = () => (
    <WithListContext render={({ data }) => {
        let html
        if (data.length > 0) {
            for (const obj in data[0]) {
                console.log(`${obj}: ${data[0][obj]} `)
                html +=`${obj}: ${data[0][obj]} `
            }
        }
        return (
            <p>{html}</p>
        )
        
    }} />
)