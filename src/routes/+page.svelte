<svelte:head>
	<title>Chinese Conversation Table</title>
	<meta name="description" content="Join the Chinese Conversation Table Club – practice, connect, and grow together!" />
</svelte:head>

<section>
	<h1>Welcome to the Chinese Conversation Table!</h1>

	<div class="info-box">
		<p>
            Our mission is to bring together Mandarin speakers of all levels in order to practice our
            language skills and learn about each other’s cultures. Whether we’re playing games,
            giving presentations, or just chatting, we always have a great time!<br/>

            Anyone is welcome, whether you’re a fluent speaker or just staring out!<br/>

            Meetings are 5pm on Fridays and 8pm on Wednesdays in EAS-3379.<br/><br/>

			我们的使命是将罗切斯特理工学院 (RIT) 的普通话学习者和母语使用者聚集在一起，营造一个热情友好的环境，促进语言练习和文化交流。
我们每周五下午 4 点在 EAS-3367 聚会，一起学习中文、激发讨论、分享演示文稿、享受游戏——所有这些都旨在帮助您学习和建立联系。
无论您的水平如何，我们都欢迎您随时加入。
请查看上方的时间表标签，或发送电子邮件给我们。
准备好学习、欢笑，并结交新朋友吧！期待与您再次相见！
		</p>
	</div>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding: 2.5rem 2rem 3rem;
		text-align: center;
		background: #f9f9f9;
		border-radius: 14px;
		box-shadow: 0 6px 20px rgba(0,0,0,0.08);
		overflow: visible;
	}

	/* Glowing animated outline */
	section::before {
		content: "";
		position: absolute;
		top: -8px; left: -8px; right: -8px; bottom: -8px;
		border-radius: 18px;
		background:
			radial-gradient(circle at top left, #d23669, transparent 40%),
			radial-gradient(circle at bottom right, #a8edea, transparent 40%);
		filter: blur(12px);
		opacity: 0.5;
		animation: pulseGlow 4s ease-in-out infinite alternate;
		z-index: -1;
	}

	@keyframes pulseGlow {
		0% { opacity: 0.4; }
		100% { opacity: 0.7; }
	}

	h1 {
		width: 100%;
		margin-bottom: 1rem;
		font-weight: 700;
		color: #d23669;
		text-shadow: 1px 1px 3px #f4c2c2;
		position: relative;
		z-index: 2;
	}

	.info-box {
		position: relative;
		background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
		padding: 1.8rem 2.5rem;
		border-radius: 20px;
		box-shadow: 0 10px 25px rgba(210, 54, 105, 0.25);
		max-width: 650px;
		color: #5b2c48;
		font-weight: 500;
		font-size: 1.15rem;
		line-height: 1.6;
		user-select: none;
		text-align: center; /* <-- centered text here */
		overflow-wrap: break-word;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	.info-box::before {
		content: "";
		display: none;
	}

	.info-box p {
		position: relative;
		z-index: 2;
		margin: 0;
		text-align: center; /* also center text inside <p> */
	}

	.info-box::after {
		content: "❦";
		position: absolute;
		font-size: 3rem;
		color: rgba(210, 54, 105, 0.2);
		top: 12px;
		right: 18px;
		user-select: none;
		transform: rotate(15deg);
		z-index: 0;
	}

	@media (max-width: 700px) {
		.info-box {
			font-size: 1rem;
			max-width: 90vw;
			padding: 1.3rem 1.6rem;
		}
	}
</style>