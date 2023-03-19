import React, { ChangeEvent, Component } from 'react';
import styles from '../search-bar/search-bar.module.scss';

interface ISearchBarState {
  value: string;
}

export default class SearchBar extends Component<Record<string, never>, ISearchBarState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    const inputValueFromLS = localStorage.getItem('input');
    if (inputValueFromLS) this.setState({ value: JSON.parse(JSON.stringify(inputValueFromLS)) });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <input defaultValue={this.state.value} type="text" onChange={this.handleChange} />
      </div>
    );
  }

  componentWillUnmount(): void {
    localStorage.setItem('input', this.state.value);
  }
}
