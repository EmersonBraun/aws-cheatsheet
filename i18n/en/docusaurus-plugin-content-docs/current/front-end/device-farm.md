---
sidebar_position: 4
---
# AWS Device Farm

## What is it
A testing service that allows testing iOS, Android, and web applications on real smartphones, tablets, and desktop browsers in the cloud.

## What it's for
Accelerate the testing process of mobile and web applications, ensuring compatibility and performance across a wide variety of devices and operating systems.

## Use cases
- Testing mobile application compatibility across different devices and OS versions
- Running performance and stress tests on mobile applications
- Reproducing errors and issues reported by users on specific devices
- Testing web applications on desktop and mobile browsers
- Integration with CI/CD pipelines for automated testing

## Key points
- **Real devices:** Test on a large collection of real physical devices in the cloud
- **Parallel testing:** Run tests in parallel on multiple devices simultaneously to speed up the process
- **Detailed reports:** Receive detailed reports with logs, screenshots, and test videos
- **Test framework support:** Supports popular testing frameworks like Appium, XCUITest, Espresso, and others
- **Remote interaction:** Allows remote interaction with devices for manual debugging
- **Integration:** Integrates with AWS CodePipeline, Jenkins, and other CI/CD tools

## Comparison with local physical device testing:
- **AWS Device Farm:** Provides access to a vast range of real devices in the cloud, eliminating the need to acquire and maintain a physical device lab. Enables parallel testing and provides detailed reports, accelerating the feedback cycle and error detection.
- **Local physical device testing:** Limited to the number of available devices, slow to set up and maintain, and may not cover the diversity of devices and operating systems in the market. Makes scalability and test automation difficult.
