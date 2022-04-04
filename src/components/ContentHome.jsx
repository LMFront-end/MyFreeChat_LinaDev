import React from 'react'

const ContentHome = () => {
  return (
    <div className="content">
      <div className="content_left">
        <ul>
          <li>
            <a href="#">
              <img src="assets/profile.png" alt="profile" />
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/covid.png" alt="covid" />
              <span>COVID-19 Information Center</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/friends.png" alt="friends" />
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/groups.png" alt="groups" /> <span>Groups</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/marketplace.png" alt="marketplace" />
              <span>Marketplace</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/videos.png" alt="videos" /> <span>Videos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/events.png" alt="events" /> <span>Events</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/memories.png" alt="memories" />
              <span>Memories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/saved.png" alt="saved" /> <span>Saved</span>
            </a>
          </li>

          <li>
            <i className="fas fa-arrow-down"></i>
            <span className="see_more">See More</span>
          </li>
          
          <h3 className="shortcut_title">Your shortcuts</h3>
          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="assets/shortcuts.jpg" alt="shortcuts" />
              <span>Lorem impsu</span>
            </a>
          </div>

          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/fabrica.png" alt="shortcuts" />
              <span>Lorem impsu</span>
            </a>
          </div>

          
          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/juntos.png" alt="shortcuts" />
              <span>Lorem impsu</span>
            </a>
          </div>

          
          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/paleta.png" alt="shortcuts" />
              <span>Lorem impsu</span>
            </a>
          </div>

          <h3 className="shortcut_title">Games</h3>
          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/mando.png" alt="shortcuts" />
              <span>Game #1</span>
            </a>
          </div>

          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/videojuego.png" alt="shortcuts" />
              <span>Game #2</span>
            </a>
          </div>

          <h3 className="shortcut_title">Events</h3>
          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/100.png" alt="shortcuts" />
              <span>Event #1</span>
            </a>
          </div>

          <div className="shortcuts_wrapper">
            <a href="#">
              <img src="../../assets/fiesta.png" alt="shortcuts" />
              <span>Event #2</span>
            </a>
          </div>
        </ul>
      </div>

      <div className="content_center">
        <div className="stories">
          <img src="https://picsum.photos/id/137/110/200" alt="" />
          <img src="https://picsum.photos/id/247/110/200" alt="" />
          <img src="https://picsum.photos/id/522/110/200" alt="" />
          <img src="https://picsum.photos/id/231/110/200" alt="" />
          <img src="https://picsum.photos/id/537/110/200" alt="" />
          <img src="https://picsum.photos/id/237/110/200" alt="" />
        </div>
        <div className="media_container">
          <div className="share">
            <div className="share_upSide">
              <img src="assets/profile.png" alt="profile" />
              <input type="text" placeholder="What's on your mind, Ogeday?" />
            </div>
            <hr />
            <div className="share_downSide">
              <div className="share_downSide_link">
                <i className="fas fa-video live-video-icon"></i>
                <span>Live Video</span>
              </div>
              <div className="share_downSide_link">
                <i className="fas fa-photo-video photo-video-icon"></i>
                <span>Photo/Video</span>
              </div>
              <div className="share_downSide_link">
                <i className="far fa-grin-alt feeling-icon"></i>
                <span>Feeling/Activity</span>
              </div>
            </div>
          </div>
          
          
          <div className="news_feed">
            <div className="news_feed_title">
              <img src="assets/user.png" alt="user" />
              <div className="news_feed_title_content">
                <p>Codersbite Magazine</p>
                <span>12h . <i className="fas fa-globe-americas"></i></span>
              </div>
            </div>
            <div className="news_feed_description">
              <p className="news_feed_subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                esse cum id vero odit tempora dicta. Saepe corporis voluptatibus
                laboriosam?
              </p>
              <img src="assets/sunflower.jpg" alt="sunflower" />
              <div className="news_feed_description_title">
                <span>YOUTUBE / CODERSBITE</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt repudiandae exercitationem mollitia, suscipit labore
                  rem reiciendis distinctio atque totam facere placeat officia
                  ea quia? Atque.
                </p>
              </div>
            </div>

            <div className="likes_area">
              <div className="emojis">
                <img src="assets/emoji_like.png" alt="like" />
                <img src="assets/emoji_surprised.png" alt="surprised" />
                <img src="assets/emoji_angry.png" alt="angry" />
                <span>25</span>
              </div>
              <div className="comment_counts">
                <span>4 Comments</span>
                <span>  13 Shares</span>
              </div>
            </div>

            <div className="divider"><hr /></div>
            <div className="likes_buttons">
              <div className="likes_buttons_links">
                <i className="far fa-thumbs-up"></i>
                <span>Like</span>
              </div>
              <div className="likes_buttons_links">
                <i className="far fa-comment-alt"></i>
                <span>Comment</span>
              </div>
              <div className="likes_buttons_links">
                <i className="fas fa-share"></i>
                <span>Share</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="content_right">
        <div className="content_right_inner">
          <div className="your_pages">
            <h3>Your Pages</h3>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <ul>
            <li>
              <a href="#">
                <img
                  className="your_page_logo"
                  src="../../assets/darkTheme.png"
                  alt="codersbite"
                />
                <span>LinaDev14</span>
              </a>
            </li>
            <li className="content_right_small_text">
              <a href="#">
                <i className="fas fa-bell"></i>
                <span>5 Notifications</span>
              </a>
            </li>
            <li className="content_right_small_text">
              <a href="#">
                <i className="fas fa-bullhorn"></i>
                <span>Create Promotion</span>
              </a>
            </li>
          </ul>
          <div className="content_right_divider"></div>
          <div className="birthdays">
            <h3>Birthdays</h3>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src="assets/gift-box.png" alt="gift-box" />
                <span>Jary Garson's birthday is today</span>
              </a>
            </li>
          </ul>
          <div className="content_right_divider"></div>
          <div className="contacts">
            <h3>Contacts</h3>
            <div className="contact_icons">
              <i className="fas fa-search"></i>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src="assets/avatar1.png" alt="user" />
                <span>John Doe</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar2.png" alt="user" />
                <span>Zorah Makey</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar5.png" alt="user" />
                <span>Kero Janre</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar3.png" alt="user" />
                <span>Ube Yuri</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar4.png" alt="user" />
                <span>Hosaa Mora</span>
              </a>
            </li>
            <li>
            <a href="#">
                <img src="assets/avatar2.png" alt="user" />
                <span>Zorah Makey</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar5.png" alt="user" />
                <span>Kero Janre</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar3.png" alt="user" />
                <span>Ube Yuri</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar5.png" alt="user" />
                <span>Kero Janre</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar3.png" alt="user" />
                <span>Ube Yuri</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar4.png" alt="user" />
                <span>Hosaa Mora</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar5.png" alt="user" />
                <span>Kero Janre</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar3.png" alt="user" />
                <span>Ube Yuri</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="assets/avatar4.png" alt="user" />
                <span>Hosaa Mora</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ContentHome}