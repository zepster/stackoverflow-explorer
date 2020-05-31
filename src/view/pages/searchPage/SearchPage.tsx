import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Form } from '../../components';

const SearchForm = (props: any, ref: any) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const history = useHistory();
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <Form ref={ref} onSubmit={onFormSubmit}>
      <Input
        placeholder="React, Vue, Angular..."
        type="search"
        value={searchValue}
        onChange={onInputChange}
        ref={inputEl}
      />
      <Button type="submit">Найти</Button>
    </Form>
  );
};

export default React.forwardRef(SearchForm);
