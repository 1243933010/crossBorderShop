<template>
	<view class="profix-page-container index-page">
		<customHeader style="z-index: 0" :headerText="$t('app.name')" :above="false" />
		<customHeader :headerText="$t('app.name')" style="position: fixed; top: 0; z-index: 1" :above="true" />
		<view class="index-scroll page-scroll has-tabbar">
			<view class="banner">
				<swiper class="swiper" circular autoplay>
					<swiper-item>
						<view class="swiper-item" v-for="(item, index) in swiperList" :key="index">
							<view class="pic">
								<image :src="item.image" mode="widthFix" class="img"></image>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>

			<view class="news-list">
				<view class="left-tit">{{ $t("index.news") }}</view>
				<view class="news-swiper">
					<swiper class="swiper" vertical circular autoplay>
						<swiper-item v-for="(item, index) in newsList" :key="index">
							<view class="swiper-item">{{ item }}</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<view class="menu-container">
				<view class="menu-list" v-for="(item, index) in menuList" :key="index">
					<view @click="goPage(e.link)" class="menu-item" v-for="(e, i) in item" :key="i">
						<view class="pic">
							<image :src="e.iconUrl" mode="widthFix" class="img"></image>
						</view>
						<view class="menu-tit">{{ e.tit }}</view>
					</view>
				</view>
			</view>

			<view class="paper-card-list">
				<view class="paper-card pic">
					<image src="../../static/img/paperCard/join.png" mode="widthFix" class="img"></image>
				</view>
				<view class="paper-card pic">
					<image src="../../static/img/paperCard/paper_air.png" mode="widthFix" class="img"></image>
				</view>
			</view>

			<view class="product-container">
				<view class="tit">{{ $t("index.moreProduct") }}</view>
				<view class="desc">{{ $t("index.moreProductDesc") }}</view>

				<view class="product-list">
					<view @click="goProductDetail(1)" class="product-item">
						<view class="product-img pic">
							<image src="../../static/img/product/1.png" mode="widthFix" class="img"></image>
						</view>
						<view class="product-info">
							<view class="product-tit">GGMARMONT超保暖羽绒服限时发售GGMARMONT超保暖羽绒服限时发售</view>
							<view class="product-price-info">
								<view class="rebate">$ 198</view>
								<view class="brfore-rebate">$ 1980</view>
							</view>
						</view>
					</view>
					<view class="product-item">
						<view class="product-img pic">
							<image src="../../static/img/product/2.png" mode="widthFix" class="img"></image>
						</view>
						<view class="product-info">
							<view class="product-tit">古驰限量绝版包包限时发售古驰限量绝版包包限时发售古驰限量绝版包包限时发售</view>
							<view class="product-price-info">
								<view class="rebate">$ 198</view>
								<view class="brfore-rebate">$ 1980</view>
							</view>
						</view>
					</view>
					<view class="product-item">
						<view class="product-img pic">
							<image src="../../static/img/product/1.png" mode="widthFix" class="img"></image>
						</view>
						<view class="product-info">
							<view class="product-tit">GGMARMONT超保暖羽绒服限时发售GGMARMONT超保暖羽绒服限时发售</view>
							<view class="product-price-info">
								<view class="rebate">$ 198</view>
								<view class="brfore-rebate">$ 1980</view>
							</view>
						</view>
					</view>
					<view class="product-item">
						<view class="product-img pic">
							<image src="../../static/img/product/2.png" mode="widthFix" class="img"></image>
						</view>
						<view class="product-info">
							<view class="product-tit">古驰限量绝版包包限时发售古驰限量绝版包包限时发售古驰限量绝版包包限时发售</view>
							<view class="product-price-info">
								<view class="rebate">$ 198</view>
								<view class="brfore-rebate">$ 1980</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import customHeader from "@/components/customHeader/customHeader.vue";
import {$request} from '@/utils/request.js'
export default {
	components: { customHeader },
	data() {
		return {
			title: "Hello",
			newsList: [
				"lual or a team, whether you have e-co1lual or a team, whether you have e-co1",
				"lual or a team, whether you have e-co1lual or a team, whether you have e-co1",
				"lual or a team, whether you have",
			],
			swiperList: [
				{
					image: "../../static/img/banner/banner.png",
					title: "广告1",
				},
			],
		};
	},
	onLoad() {},
	computed: {
		locales() {
			return [
				{
					text: this.$t("locale.auto"),
					code: "auto",
				},
				{
					text: this.$t("locale.en"),
					code: "en",
				},
				{
					text: this.$t("locale.zh-hans"),
					code: "zh-Hans",
				},
				{
					text: this.$t("locale.zh-hant"),
					code: "zh-Hant",
				},
				{
					text: this.$t("locale.ja"),
					code: "ja",
				},
			];
		},
		menuList() {
			return [
				[
					{
						iconUrl: "../../static/img/icon/index/1.png",
						tit: this.$t("index.menuBtn1"),
						link: "/pages/index/aboutUs",
					},
					{
						iconUrl: "../../static/img/icon/index/2.png",
						tit: this.$t("index.menuBtn2"),
						link: "/pages/index/qualifications",
					},
					{
						iconUrl: "../../static/img/icon/index/3.png",
						tit: this.$t("index.menuBtn3"),
						link: "/pages/index/activityInfo",
					},
				],
				[
					{
						iconUrl: "../../static/img/icon/index/4.png",
						tit: this.$t("index.menuBtn4"),
						link: "/pages/index/storageLevel",
					},
					{
						iconUrl: "../../static/img/icon/index/5.png",
						tit: this.$t("index.menuBtn5"),
						link: "/pages/index/recargar",
					},
					{
						iconUrl: "../../static/img/icon/index/6.png",
						tit: this.$t("index.menuBtn6"),
						link: "/pages/index/withdraw",
					},
				],
				[
					{
						iconUrl: "../../static/img/icon/index/7.png",
						tit: this.$t("index.menuBtn7"),
						link: "",
					},
					{
						iconUrl: "../../static/img/icon/index/8.png",
						tit: this.$t("index.menuBtn8"),
						link: "/pages/index/activity",
					},
					{
						iconUrl: "../../static/img/icon/index/9.png",
						tit: this.$t("index.menuBtn9"),
						link: "/pages/join/join",
					},
				],
			];
		},
	},
	mounted() {
		this.adverts();
	},
	methods: {
		async adverts() {
			$request("adverts", {}).then(res => {
				let { code, data, msg } = res.data;
				console.log(res);
				if (code === 0) {
					this.swiperList = data;
				}
			});
		},
		onLocaleChange(e) {
			if (this.isAndroid) {
				uni.showModal({
					content: this.$t("index.language-change-confirm"),
					success: res => {
						if (res.confirm) {
							uni.setLocale(e.code);
						}
					},
				});
			} else {
				uni.setLocale(e.code);
				this.$i18n.locale = e.code;
			}
		},
		goProductDetail(productId) {
			uni.navigateTo({
				url: `/pages/index/productDetail?id=${productId}`,
			});
		},
		goPage(link) {
			if (link.indexOf("join") !== -1) {
				uni.switchTab({
					url: link,
				});
			} else {
				uni.navigateTo({
					url: link,
				});
			}
		},
	},
};
</script>

<style lang="less">
@import "../../static/less/variable.less";

.index-page {
	background-color: #f5f4f9;

	.index-scroll {
		.banner {
			margin-left: -30rpx;
			margin-right: -30rpx;

			.swiper {
				height: 140px;
			}
		}

		.news-list {
			margin-left: -30rpx;
			margin-right: -30rpx;
			padding: 10rpx 30rpx;
			background-color: #fff;

			.df(center, flex-start);

			.left-tit {
				margin-right: 38rpx;
				border-radius: 0 50px 50px 0;
				padding: 10rpx 30rpx;
				background: linear-gradient(0deg, #fd631f 0%, #fd7e1f 100%);
				color: #fff;
			}

			.news-swiper {
				min-width: 10%;
				flex-grow: 1;

				.swiper {
					height: 36rpx;

					.swiper-item {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

						color: #908f9a;
						font-size: @descSize;
						line-height: 36rpx;
					}
				}
			}
		}

		.menu-container {
			padding: 70rpx 36rpx;

			.menu-list {
				margin-bottom: 60rpx;

				.df(stretch, space-between);

				&:last-child {
					margin-bottom: 0;
				}

				.menu-item {
					.df(center, center);
					flex-direction: column;
					width: 33.33%;
					text-align: center;

					.pic {
						width: 58rpx;
					}

					.menu-tit {
						margin-top: 24rpx;
						font-size: 24rpx;
					}
				}
			}
		}

		.paper-card-list {
			margin-bottom: 36rpx;

			.paper-card {
				margin-bottom: 10rpx;
				width: 100%;
			}
		}

		.product-container {
			padding-bottom: 26rpx;

			.tit {
				margin-bottom: 8rpx;
				color: @bodyColor;
				font-size: @bodySize;
			}

			.desc {
				margin-bottom: 28rpx;
				color: #777680;
				font-size: 24rpx;
			}

			.product-list {
				.df(stretch, flex-start);
				flex-wrap: wrap;

				.product-item {
					margin-top: 10rpx;
					margin-right: 10rpx;
					border-radius: 8rpx;
					background-color: #fff;
					width: calc(50% - 5rpx);
					overflow: hidden;

					.product-img {
						width: 100%;
						background-color: #e8e8e8;
					}

					.product-info {
						padding: 20rpx 28rpx;

						.product-tit {
							.vertical(2);
						}

						.product-price-info {
							.df(center, space-between);

							.rebate {
								color: #fd384f;
								font-size: 36rpx;
								font-weight: bold;
							}

							.brfore-rebate {
								color: #777680;
								font-size: 30rpx;
								text-decoration: line-through;
							}
						}
					}

					&:nth-child(2n) {
						margin-right: 0;
					}
				}
			}
		}
	}
}
</style>
