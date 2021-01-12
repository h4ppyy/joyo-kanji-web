const Main = () => {
  return (
    <div className="container">
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">번호</th>
              <th scope="col">뜻</th>
              <th scope="col">한자</th>
              <th scope="col">훈독</th>
              <th scope="col">음독</th>
              <th scope="col">단어확인</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>깨달을 각</td>
              <td>覚</td>
              <td>かく</td>
              <td>おぼえる、さます、さめる</td>
              <td>
                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Link with href
                </a>
              </td>
            </tr>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main;