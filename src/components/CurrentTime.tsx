import React from 'react'
import format from 'date-fns/format'

export default function CurrentTime(){
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (<time>{format(time, "EEEE, MMMM do  h:mm:ss a")}</time>)
}