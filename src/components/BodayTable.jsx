import orders  from '../data/orders.json';

export default function BodayTable()
{  
return  orders.map((item) => { 
        return (
          <table className="Lo">
            {
              <tr>
                <td > {item.id} </td>
                <td> {item.status}  </td>
                <td> {item.eta} </td>
                <td> {item.location_name}</td>
              </tr>
          }
            </table>
        );
      
        });
    
  }