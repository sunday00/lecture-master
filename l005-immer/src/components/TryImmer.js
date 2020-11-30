import React, { useState } from 'react';
import { produce } from 'immer';

const TryImmer = () => {
  const [jobs, setJobs] = useState([
    { id: 1, todo: 'Spit to followers of PowerOfCitizensParty', checked: true },
    { id: 2, todo: 'Send money for supporting Democrats', checked: false },
  ]);

  const secondJobCheckedJobs = produce(jobs, (draft) => {
    draft.find((j) => j.id === 2).checked = true;
  });

  const firstIsDeletedJobs = produce(jobs, (draft) =>
    draft.filter((j) => j.id !== 1),
  );

  const add3rdJobs = produce(jobs, (draft) => {
    draft.push({ id: 3, todo: 'Vote justice!', checked: false });
  });

  return (
    <div>
      <button
        onClick={() => {
          setJobs(secondJobCheckedJobs);
        }}
      >
        check 2nd true
      </button>
      <button
        onClick={() => {
          setJobs(firstIsDeletedJobs);
        }}
      >
        delete 1st
      </button>
      {!jobs.find((j) => j.id === 3) && (
        <button
          onClick={() => {
            setJobs(add3rdJobs);
          }}
        >
          +
        </button>
      )}

      {jobs.map((j) => (
        <p key={j.id}>
          <input type="checkbox" checked={j.checked} disabled /> {j.todo}
        </p>
      ))}
    </div>
  );
};

export default TryImmer;
