<template>
  <f7-page>
    <f7-navbar title="Horizontal Timeline" back-link="Back"></f7-navbar>
    <div class="timeline timeline-horizontal timeline-cols-3 medium-timeline-cols-5">
      <div class="timeline-item">
        <div class="timeline-item-date">21 <small>DEC</small></div>
        <div class="timeline-item-content">
          <div class="timeline-item-inner">
            <div class="timeline-item-time">12:56</div>
            <div class="timeline-item-title">Title 1</div>
            <div class="timeline-item-subtitle">Subtitle 1</div>
            <div class="timeline-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">13:15</div>
            <div class="timeline-item-title">Title 2</div>
            <div class="timeline-item-subtitle">Subtitle 2</div>
            <div class="timeline-item-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">14:45</div>
            <div class="timeline-item-text">Do something</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">16:11</div>
            <div class="timeline-item-text">Do something else</div>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-date">22 <small>DEC</small></div>
        <div class="timeline-item-content">Plain text goes here</div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-date">23 <small>DEC</small></div>
        <div class="timeline-item-content">
          <div class="card no-safe-areas">
            <div class="card-header">Card</div>
            <div class="card-content card-content-padding">Card Content</div>
            <div class="card-footer">Card Footer</div>
          </div>
          <div class="card no-safe-areas">
            <div class="card-content card-content-padding">Another Card Content</div>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-date">24 <small>DEC</small></div>
        <div class="timeline-item-content">
          <div class="list links-list inset list-strong list-dividers-ios no-safe-areas">
            <ul>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-date">25 <small>DEC</small></div>
        <div class="timeline-item-content">
          <div class="timeline-item-time">11:11</div>
          <div class="timeline-item-text">Task 1</div>
          <div class="timeline-item-time">12:33</div>
          <div class="timeline-item-text">Task 2</div>
          <div class="timeline-item-time">13:24</div>
          <div class="timeline-item-text">Task 3</div>
          <div class="timeline-item-time">14:55</div>
          <div class="timeline-item-text">Task 4</div>
          <div class="timeline-item-time">15:15</div>
          <div class="timeline-item-text">Task 5</div>
          <div class="timeline-item-time">16:54</div>
          <div class="timeline-item-text">Task 6</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-item-date">26 <small>DEC</small></div>
        <div class="timeline-item-content">
          <div class="timeline-item-inner">
            <div class="timeline-item-time">11:11</div>
            <div class="timeline-item-text">Task 1</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">12:33</div>
            <div class="timeline-item-text">Task 2</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">13:24</div>
            <div class="timeline-item-text">Task 3</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">14:55</div>
            <div class="timeline-item-text">Task 4</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">15:15</div>
            <div class="timeline-item-text">Task 5</div>
          </div>
          <div class="timeline-item-inner">
            <div class="timeline-item-time">16:54</div>
            <div class="timeline-item-text">Task 6</div>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
import { f7Navbar, f7Page } from '@xenknight/framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
  },
};
</script>
