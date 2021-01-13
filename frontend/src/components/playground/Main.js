import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

const Main = () => {

  const MySwal = withReactContent(Swal)

  const [kanjiList, setKanjiList] = useState([])

  const getKanjiList = async () => {
    const url = '/api/v1/get_kanji_list'
    return await axios.get(url)
  }

  const getWordList = async (pk) => {
    const url = '/api/v1/get_word_list'
    return await axios.get(url, { params: { pk: pk } })
  }

  const showWord = async (pk, kanji) => {
    const result = await getWordList(pk)
    console.log('result = ', result)

    if (result.status === 200) {
      
      let html = `
        <h2 class="f1 mb-4">
          ${kanji}
        </h2>
      `

      result.data.length === 0 ? (
        html = '<div class="f2">등록된 단어가 없습니다.</div>'
      ) : (
        result.data.map((item, idx) => {
          html += `
            <div class="word-box">
              <img class="word-img" src="${item.fields.image}">
              <div class="word-txt">
                <span class="kanji">${item.fields.word}</span>
                <span class="hangul">${item.fields.mean}</span>
              </div>
            </div>
          `
        })
      )

      MySwal.fire({
        confirmButtonText: '확인',
        confirmButtonColor: '#212529',
        html: html
      })
    }
  }

  const getInitData = async () => {
    const result = await getKanjiList()
    console.log('result = ', result)
    if (result.status === 200) {
      setKanjiList(result.data)
    }
  }

  useEffect(() => {
    if (kanjiList.length === 0) {
      getInitData()
    }
  }, []);

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
                kanjiList.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <th className="text-center" scope="row">{item.pk}</th>
                      <td>{item.fields.mean}</td>
                      <td className="text-center">{item.fields.kanji}</td>
                      <td>{item.fields.kunyomi}</td>
                      <td>{item.fields.onyomi}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-light"
                          type="button"
                          onClick={() => showWord(item.pk, item.fields.kanji)}
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