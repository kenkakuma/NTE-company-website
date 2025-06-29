<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
</script>
<template>
  <section class="py-2">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-2 mt-2">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="primary" class="mb-3"
              >企業サービス</MaterialBadge
            >
            <h2 class="">企業情報・お問い合わせ</h2>
            <p class="lead">
              企業詳細、お問い合わせフォーム、各種サービスページを<br />
              こちらからご利用いただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="About Us Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/about-us.jpg"
                route="about"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Contact Us Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/contact.jpg"
                route="contactus"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Sign In Page"
                :image="imgSigninCover"
                route="signin-basic"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Author Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                route="author"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              企業情報とサポートページ
            </h3>
            <h6 class="text-secondary font-weight-normal">
              NO TRACE EXPLORERの企業情報、お問い合わせ、<br>
              各種サービスの詳細情報をご覧いただけます。
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
