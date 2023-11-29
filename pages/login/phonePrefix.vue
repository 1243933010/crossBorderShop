<template>
	<view class="profix-page-container phone-prefix-page">
		<view class="phone-prefix-scroll page-scroll">
			<view class="classify-list" v-if="Object.values(countries).length">
				<view class="classify-item" v-for="[key, value] in Object.entries(countries)" :key="key">
					<view class="tit">{{ key }}</view>
					<view class="list">
						<view class="item" @click="selectPrefix(prefix)" v-for="prefix of value" :key="prefix.id">
							<view class="prefix-name">{{ prefix.en }}</view>
							<view class="prefix">+{{ prefix.prefix }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import prefixSorted from "@/utils/phonePrefix.js";

export default {
	data() {
		return {
			countries: {},
		};
	},
	mounted() {
		this.sorting();
	},
	methods: {
		sorting() {
			prefixSorted.sort((a, b) => a.en.localeCompare(b.en));

			// 按照首页字母进行分类
			const categorizedCountries = {};
			prefixSorted.forEach(country => {
				const firstLetter = country.en.charAt(0).toUpperCase(); // 获取首字母并转为大写
				if (!categorizedCountries[firstLetter]) {
					categorizedCountries[firstLetter] = [];
				}
				categorizedCountries[firstLetter].push(country);
			});

			this.countries = categorizedCountries;
		},
		selectPrefix(prefix) {
			uni.navigateBack({
				delta: 1, // 返回上一页
				success() {
					uni.$emit("getPrefix", prefix);
				},
			});
		}
	},
};
</script>

<style lang="less">
.profix-page-container {
	.phone-prefix-scroll {
		padding: 0;

		.classify-list {
			.classify-item {
				.tit {
					padding: 10px;
					background-color: #eee;
					font-weight: bold;
				}

				.list {
					display: flex;
					flex-direction: column;

					.item {
						border-bottom: 1px solid #eee;
						padding: 10px 15px 10px 10px;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.prefix-name {
							font: 16px;
						}

						.prefix {
							font-size: 12px;
							color: #888;
						}
					}
				}
			}
		}
	}
}
</style>
