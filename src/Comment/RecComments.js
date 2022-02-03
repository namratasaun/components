import { useState } from 'react';
import Comment from './Comment';

const RecComments = ({ data }) => {
  const [innerData, setInnerData] = useState(data);

  const ok = (data) => {
    let q = [...innerData];
    q[data].likes++;
    setInnerData([...q]);
  };

  const replyHandler = (ind, val) => {
    let q = [...innerData];
    if (q[ind].hasOwnProperty('children')) {
      q[ind].children.push(val);
    } else {
      q[ind].children = [{ ...val }];
    }
    setInnerData([...q]);
  };

  return (
    <div>
      {innerData.map((val, index) => (
        <div style={{ marginLeft: `1rem` }}>
          <Comment
            key={val.comment_id}
            data={{ user: val.user, comment: val.comment, likes: val.likes }}
            likeHandler={() => ok(index)}
            replyHandler={(data) => replyHandler(index, data)}
          />
          {val.children && val.children.length ? <RecComments data={val.children} /> : ''}
        </div>
      ))}
    </div>
  );
};

export default RecComments;
