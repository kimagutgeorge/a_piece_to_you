<div class="wrapper about">
        <div class="nav-bar-wrapper">
        <?php include("components/smallbar.php");?>
        <div class="cover"></div>
        <div class="hero-84">
        <?php include("components/navbar.php");?>
          </div>
        </div>
        <div class="view-event blogs hero-84 row ten-vh">
            <div class="col-8 row">
            <div class="col-11 card" v-for="(blog, index) in blogs" :key="index" style="margin-bottom:30px !important">
                <img  :src="require(`../../assets/images/bg/blogs/${blog.blog_banner}`)" class="w-100 banner-img" alt="">
                <div class="blog-detail four-vh">
                    <div class="icon">
                        <span class="text-muted"><i class="fa-solid fa-user"></i> {{blog.blog_writer}}</span>
                    </div>
                    <div class="icon">
                        <span class="text-muted"><i class="fa-solid fa-calendar"></i> {{ formatDate(blog.created) }}</span>
                    </div>
                    <div class="icon">
                        <span class="text-muted"><i class="fa-solid fa-tags"></i> {{blog.blog_category}}</span>
                    </div>
                </div>
                <h3 class="text-third four-vh">{{blog.blog_name}}</h3>
                <RouterLink :to="{ name: 'View Blog', params: { id: blog.blog_id }}" :key="$route.fullPath">
                <button class="btn btn-primary four-vh">READ MORE</button>
                </RouterLink>
            </div>
            <!-- end of blog one -->
            </div>
            <div class="col-4">
                <div class="card col-12">
                    <h4 class="text-third two-vh">Categories</h4>
                    <div class="col-11">
                        <div class="col-11 row two-vh" v-for="(blogcount, index) in blog_count" :key="index">
                            <p class="col-11">{{blogcount.category}}</p>
                            <p class="col-1">{{blogcount.count}}</p>
                        </div>
                    </div>
                </div>
                <div class="card col-12 four-vh">
                    <h4 class="text-third two-vh">Recent Posts</h4>
                    <div class="col-11">
                        <div class="col-11 card small-blog"  v-for="(blog, index) in blogs" :key="index">
                            <div class="col-4">
                                <img :src="require(`../../assets/images/bg/blogs/${blog.blog_banner}`)" class="w-100" alt="">
                            </div>
                            <div class="col-8">
                                <p class="fw-bold two-vh text-primary">{{blog.blog_name}}</p>
                                <p class="text-muted"><i class="fa-solid fa-calendar"></i>  {{ formatDate(blog.created) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>