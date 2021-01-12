import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Main = () => {

  const MySwal = withReactContent(Swal)

  const showWord = () => {
    MySwal.fire({
      confirmButtonText: '확인',
      confirmButtonColor: '#212529',
      html: `
        <h2 class="f1 mb-4">
          覚
        </h2>
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
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-4 f1">상용한자 2136</h1>

        <div className="table-responsive-lg">
          <table className="table table-borderless f2">
            <thead>
              <tr>
                <th className="text-center" scope="col">번호</th>
                <th className="text-center" scope="col">뜻</th>
                <th className="text-center" scope="col">한자</th>
                <th className="text-center" scope="col">훈독</th>
                <th className="text-center" scope="col">음독</th>
                <th className="text-center" scope="col">단어확인</th>
              </tr>
            </thead>
            <tbody>
              {
                loop.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th className="text-center" scope="row">1</th>
                      <td>깨달을 각</td>
                      <td className="text-center">覚</td>
                      <td>かく</td>
                      <td>おぼえる、さます、さめる</td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-light"
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
    </>
  )
}

export default Main;