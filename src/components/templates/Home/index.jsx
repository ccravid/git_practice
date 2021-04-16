import "./styles.css";
import { Component } from "react";

import { loadPosts } from "../../../utils/loadPosts";
import { Post } from "../../posts";
import { Button } from "../../Button";
import { Input } from "../../Input";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    seachValue: "",
  };
  timeoutUpdate = null;

  componentWillMount() {
    console.log("I will mount");
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    console.log("hey");
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
    console.log(posts);
  };

  handleSearch = (e) => {
    const { allPosts } = this.state;

    const dataToSearch = e.target.value;
    console.log(dataToSearch);
    const filteredPost = allPosts.filter((post) =>
      post.title.includes(dataToSearch.toLowerCase())
    );
    this.setState({ posts: filteredPost, searchValue: dataToSearch });
  };

  render() {
    const { posts, postsPerPage, page, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const postfiltered = posts;

    return (
      <section className="container">
        <div className="search-container">
          {searchValue && <h1> Search: {searchValue.toLowerCase()}</h1>}

          <Input handleSearch={this.handleSearch} searchValue={searchValue} />
          {postfiltered.length === 0 ? (
            <h4>Post not found! :(</h4>
          ) : (
            <Post posts={posts} />
          )}
        </div>

        <div className="button-container">
          {!searchValue && (
            <Button loadMorePosts={this.loadMorePosts} disabled={noMorePosts} />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
