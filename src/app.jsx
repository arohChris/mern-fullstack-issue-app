const issues = [
   {
      id :1, status:'New', Owner :'Ravan', effort:5, created: new Date('2018-08-15'),
      due:undefined, title:'error in then console when submitting forms.'
   },
   {
      id :2, status:'Assigned', Owner :'Eddie', effort:14, created: new Date('2018-08-30'),
      due: new Date('2018-08-16'), title:'Missing bottom border on the panel.'
   }
]

  class IssueFilter extends React.Component{

   render () {

      return(

         <div> This  is a placeholder for the issue Filter component </div>
      )
   }
  }

  class IssueTable extends React.Component{

   render () {
      
      const IssueRows = issues.map(issue => <IssueRow key={issue.id} issue= {issue} />)
      return(
         <table className="bordered-table">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>STATUS</th>
                  <th> OWNER</th>
                  <th>EFFORT</th>
                  <th>CREATED</th>
                  <th>DUE</th>
                  <th>TITLE</th>
               </tr>
            </thead>
            <tbody>
               { IssueRows }
            </tbody>
         </table>
      )
   }

}


class IssueRow extends React.Component{

   render(){
      const issue = this.props.issue
      return(
         <tr>
            <td> {issue.id} </td>
            <td> {issue.status} </td>
            <td> {issue.Owner} </td>
            <td> {issue.effort} </td>
            <td> {issue.created.toDateString()} </td>
            <td> {issue.due ? issue.due.toDateString() : ''} </td>
            <td> {issue.title} </td>




         </tr>
      )
   }
}

   class IssueAdd extends React.Component {

      render () {

         return(
            <div> this is a placeholder for the issue add component.</div>
         )
      }
   }
  
   class IssueList extends React.Component{

      render () {

         return (
            <div>
                 <h1> Issue Tracker</h1>
                 <IssueFilter />
                 <hr />
                 <IssueTable />
                 <hr />
                 <IssueAdd />
             </div>
         ) 
      }
   }

 

 
const container = document.getElementById('container')
const root = ReactDOM.createRoot(container)

root.render( <IssueList /> )
