import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {fruits} from './fruits';

const itemPerPage = 10;
export default function () {
  const nav = useNavigate();

  const {fruitName} = useParams<{fruitName: string}>();

  // useSearchParams는 ? 다음 값을 가져오는데
  // ?page=2 이면 searchParams.get(page)의 값은 2임
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // URL 쿼리 스트링의 page 값에 따라 currentPage 설정
  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams]);

  const filteredFruits = fruits.filter(fruit => fruit.name === fruitName);
  const currentFruits = filteredFruits.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
  const totalPages = Math.ceil(filteredFruits.length / itemPerPage);

  return (
    <div>
      <h1>{fruitName} List</h1>
      <ul>
        {currentFruits.map((fruit, index) => (
          <li
            key={index}
            style={{listStyle: 'none'}}
            onClick={() =>
              nav(`/${fruit.name}/${index + 1}?page=${currentPage}`)
            }
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => nav(`?page=${currentPage - 1}`)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => nav(`?page=${currentPage + 1}`)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

//totalResult
//totalpages
//page
//pagesize
//groupsize
//lastpage
//firstpage

/*totalResult는 몇개나 정보가 있는지임
page정보는 임의로 설정. 1
pageSize는 10  10개씩 보여주도록
groupsize 페이지네이션을 몇개씩 보여줄지 정함
pageSize랑 groupSize는 바뀌는 값이 아니기에 const도 괜찮음

pageGroup -> 내가 몇번째 그룹에 속한건지
내가 속한 페이지 / 그룹사이즈
Math.ceil(page / groupSize);

lastPage = pageGroup * groupSize;
fristPage = lastPage - (gruopSize-1);
*/
