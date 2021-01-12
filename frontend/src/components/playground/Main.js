import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Main = () => {

  const MySwal = withReactContent(Swal)

  const showWord = () => {
    MySwal.fire({
      confirmButtonText: '확인',
      title: '覚',
      html: `
        <div class="word-box">
          <img class="word-img" src="/sample/視覚.jpg">
          <div class="word-txt">
            <span class="kanji">視覚</span>
            <span class="hangul">시각</span>
          </div>
        </div>
        
        <div class="word-box">
          <img class="word-img" src="/sample/知覚.jpg">
          <div class="word-txt">
            <span class="kanji">知覚</span>
            <span class="hangul">지각</span>
          </div>
        </div>
      `
    })
  }

  const loop = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ]

  return (
    <div className="container">
      <div className="table-responsive-lg">
        <table className="table table-bordered">
          <thead>
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
            {
              loop.map(() => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>깨달을 각</td>
                    <td>覚</td>
                    <td>かく</td>
                    <td>おぼえる、さます、さめる</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => showWord()}
                      >
                        단어
                  </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main;